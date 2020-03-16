import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/articles">
        <button className="navArticles">Nc_News</button>
      </Link>
    </nav>
  );
};

export default Nav;
