import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <ul>
      <li><Link to="/">Blog</Link></li>
      <li><Link to="/new">Add a new post</Link></li>
    </ul>
  );
}

export default Nav;
