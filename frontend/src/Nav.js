import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from 'reactstrap';
import './Nav.css';

function Nav() {

  return (
    <div className="Nav">
      <Jumbotron>
        <h1 className="display-3">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
        <Link to="/">Blog</Link>
        <Link to="/new">Add a new post</Link>
      </Jumbotron>
    </div>
  );
}

export default Nav;
