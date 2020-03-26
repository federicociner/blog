import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DiscussionEmbed } from "disqus-react";

// Components
import Layout from "components/Layout";
import SEO from "components/seo";

// Utilities
import { rhythm, scale } from "utils/typography";
import kebabCase from "lodash/kebabCase";

class Post extends Component {
  render() {
    const post = this.props.data.mdx;
    const disqusConfig = {
      shortname: process.env.GATSBY_DISQUS_NAME,
      config: { identifier: post.id }
    };
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.date}
        </p>
        <p>
          {post.frontmatter.tags.map((tag, index) => {
            return (
              <span
                style={{
                  background: "slategray",
                  borderRadius: "6px",
                  display: "inline-block",
                  marginTop: "6px",
                  marginRight: "12px",
                  padding: "1px 3px"
                }}
                key={index}
              >
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none"
                  }}
                  to={`/tags/${kebabCase(tag)}`}
                >
                  {tag}
                </Link>
              </span>
            );
          })}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <DiscussionEmbed {...disqusConfig} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                <b>Previous post</b>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                <b>Next post</b>
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default Post;

export const pageQuery = graphql`
  query postBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
