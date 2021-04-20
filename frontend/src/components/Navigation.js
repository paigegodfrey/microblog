import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="Navigation jumbotron mt-2 text-center">
      <h1 className="display-4">Microblog</h1>
      <hr/>
      <p className="subheading lead">Start blogging today!</p>
      <nav>
        <div className="btn-group-justified">
          <NavLink exact to="/" className="nav-btn btn btn-primary">Home</NavLink>
          <NavLink exact to="/new" className="nav-btn btn btn-primary">Create Post</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
