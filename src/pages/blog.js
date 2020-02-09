import React, { Component } from "react";
import { Link, graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import Navigation from "../components/nav";
import SEO from "../components/seo";

// Utilities
import { rhythm } from "../utils/typography";

class Blog extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Navigation />
        <SEO title="Blog" />
        <div style={{ margin: "20px 0 40px" }}>
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
                <small style={{ color: "black" }}>
                  {node.frontmatter.date}
                </small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
