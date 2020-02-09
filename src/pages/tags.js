import React, { Component } from "react";

// Components
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Navigation from "../components/nav";
import SEO from "../components/seo";

// Utilities
import kebabCase from "lodash/kebabCase";

class Tags extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const tags = data.allMdx.group;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Navigation />
        <SEO title="Tags" />
        <div>
          <h1>Tags</h1>
          <ul>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`tags/${kebabCase(tag.fieldValue)}`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Tags;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
