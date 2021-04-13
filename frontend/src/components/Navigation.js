import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="Navigation jumbotron mt-2">
      <h1 className="display-4">Microblog</h1>
      <p className="lead">Start blogging today!</p>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/new">Create Post</NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
