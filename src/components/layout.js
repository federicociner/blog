import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Utilities
import { rhythm, scale } from "../utils/typography";

class Layout extends Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const aboutPath = `${__PATH_PREFIX__}/about/`;
    const blogPath = `${__PATH_PREFIX__}/blog/`;
    const resumePath = `${__PATH_PREFIX__}/resume/`;
    const tagsPath = `${__PATH_PREFIX__}/tags/`;
    let header;

    if (
      location.pathname === rootPath ||
      location.pathname === aboutPath ||
      location.pathname === blogPath ||
      location.pathname === resumePath ||
      location.pathname === tagsPath
    ) {
      header = (
        <h1
          style={{
            ...scale(2),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit"
            }}
            to={location.pathname === blogPath ? "/" : "/"}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit"
            }}
            to={"/blog/"}
          >
            {title}
          </Link>
        </h3>
      );
    }

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()} Federico Ciner
          <br /> Built with{" "}
          <a style={{ textDecoration: "none" }} href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </Footer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`;

export default Layout;
