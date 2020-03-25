import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { rhythm } from "utils/typography";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;

        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            <p>
              I am a software developer working in the financial services sector
              in Sydney, Australia. I like reading, cooking, playing guitar,
              travelling, running, hiking, and learning new things.
            </p>
          </Container>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query bioQuery {
    avatar: file(relativePath: { eq: "images/profile_pic.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
`;

export default Bio;
