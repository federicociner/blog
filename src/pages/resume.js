import React, { Component } from "react";
import { graphql } from "gatsby";

// Components
import Button from "../components/button";
import Layout from "../components/layout";
import Navigation from "../components/nav";
import SEO from "../components/seo";

class ResumePage extends Component {
  state = {
    pageNumber: 1
  };

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Resume" />
        <Navigation />
        <p>Click below to download a copy of my resume.</p>
        <a href="https://drive.google.com/file/d/1fMqBTwdmJ_FbOlZ23On-_51EfRKcX1yG/view?usp=sharing">
          <Button marginBottom="15px">Resume</Button>
        </a>
        <p>Last updated on February 5, 2020.</p>
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

export default ResumePage;
