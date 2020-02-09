import React, { Component } from "react";
import { Link, graphql } from "gatsby";

// Components
import Layout from "../components/layout";

class Tag extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const tag = this.props.pageContext.tag;
    const { edges, totalCount } = this.props.data.allMdx;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div>
          <h1>{tagHeader}</h1>
          <ul>
            {edges.map(({ node }) => {
              const { slug } = node.fields;
              const { title } = node.frontmatter;
              return (
                <li key={slug}>
                  <Link to={`/blog/${slug}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <Link to="/tags/">All tags</Link>
        </div>
      </Layout>
    );
  }
}

export default Tag;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
  }
`;
