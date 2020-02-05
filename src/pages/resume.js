import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Navigation from "../components/nav";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import "react-pdf/dist/Page/AnnotationLayer.css";

class ResumePage extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { data } = this.props;
    const { pageNumber, numPages } = this.state;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Navigation />
        <p>My resume, developed in LaTeX.</p>
        <Document
          file="/resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
          renderMode="svg"
        >
          <Page pageNumber={pageNumber} scale={1.25} />
        </Document>
        <br></br>
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
