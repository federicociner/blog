import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Navigation from "../components/nav";

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
