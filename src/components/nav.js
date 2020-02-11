import React, { Component } from "react";
import { Link } from "gatsby";

// Components
import Button from "../components/button";

class Navigation extends Component {
  render() {
    return (
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <Link style={{ textDecoration: "none" }} to="/about/">
          <Button>About</Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/blog/">
          <Button>Blog</Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/resume/">
          <Button>Resume</Button>
        </Link>
      </div>
    );
  }
}

export default Navigation;
