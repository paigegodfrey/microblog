import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation jumbotron mt-2">
      <h1 className="App-title display-4">Microblog</h1>
      <p className="lead">Start blogging today!</p>
      <nav>
        <NavLink exact to="/">Blog</NavLink>
        <NavLink exact to="/new">Add a new post</NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
