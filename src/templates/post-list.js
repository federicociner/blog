import React, { Component } from "react";
import { Link, graphql } from "gatsby";

// Components
import Layout from "components/Layout";
import Navigation from "components/nav";
import SEO from "components/seo";

// Utilities
import { rhythm } from "utils/typography";

class PostList extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        pageList={data.allSitePage}
      >
        <Navigation />
        <SEO
          title={siteTitle}
          keywords={["blog", "gatsby", "react", "javascript"]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={({ boxShadow: `none` }, { textDecoration: "none" })}
                  to={`blog${node.fields.slug}`}
                >
                  {title}
                </Link>
              </h3>
              <small style={{ color: "black" }}>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </div>
          );
        })}
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0
          }}
        >
          {!isFirst && (
            <Link to={`blog/${prevPage}`} rel="prev">
              Previous page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0
              }}
            >
              <Link
                to={`/blog/${i === 0 ? "" : i + 1}`}
                style={{
                  padding: rhythm(1 / 4),
                  textDecoration: "none",
                  color: i + 1 === currentPage ? "#ffffff" : "",
                  background: i + 1 === currentPage ? "#007acc" : ""
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={`blog/${nextPage}`} rel="next">
              Next page
            </Link>
          )}
        </ul>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query postPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allSitePage(filter: { component: { regex: "/post-list/" } }) {
      edges {
        node {
          path
        }
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
          }
        }
      }
    }
  }
`;

export default PostList;
