import React from "react";
import { Link } from "gatsby";

import Button from "../components/button";

class Navigation extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", marginBottom: "25px" }}>
        <Link style={{ textDecoration: "none" }} to="/about/">
          <Button>About</Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/blog/">
          <Button>Blog</Button>
        </Link>
      </div>
    );
  }
}

export default Navigation;
