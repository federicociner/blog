import React, { Component } from "react";
import { graphql } from "gatsby";

// Components
import Bio from "components/bio";
import Layout from "components/Layout";
import Navigation from "components/nav";
import SEO from "components/seo";

class AboutPage extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Me" />
        <Navigation />
        <h1> About Me</h1>
        <Bio />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
