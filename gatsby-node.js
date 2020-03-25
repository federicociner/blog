const path = require("path");
const _ = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve("./src/templates/post.js");
  const tagTemplate = path.resolve("./src/templates/tag.js");

  const result = await graphql(
    `
      {
        postsRemark: allMdx(
          filter: { fileAbsolutePath: { regex: "/blog/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  // Create blog post pages
  const posts = result.data.postsRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    });
  });

  // Create blog post list pages
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/post-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Create tag pages
  tags.forEach(tag => {
    createPage({
      path: `tags/${_.kebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value
    });
  }
};

// Enable absolute imports from `src`.
// See https://gatsbyjs.org/docs/add-custom-webpack-config#absolute-imports.
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`]
    }
  });
};
