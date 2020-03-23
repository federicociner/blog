import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// Components
import Layout from "../components/layout";
import Navigation from "../components/nav";
import SEO from "../components/seo";

class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Navigation />
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Hello.</h1>
        <p>Welcome to my website, I hope you enjoy your stay!</p>
        <Img fluid={data.siteImage.childImageSharp.fluid} />
        <small>
          Walking on the Perito Moreno glacier in El Calafate, Argentina.
        </small>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        title
      }
    }
    siteImage: file(relativePath: { eq: "images/perito_moreno.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
