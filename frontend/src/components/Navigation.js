import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PostModal from "../components/PostModal";
import "./Navigation.css";

const Navigation = () => {

  const [showPostModal, setShowPostModal] = useState(false);

  const handleClose = () => setShowPostModal(false);
  const handleShow = () => setShowPostModal(true);

  return (
    <div className="Navigation jumbotron mt-2 mb-auto text-center">
      <h1 className="display-4">Microblog</h1>
      <hr />
      <p className="subheading lead">Start blogging today!</p>
      <nav>
        <div className="btn-group-justified">
          <NavLink exact to="/" className="btn btn-outline-primary">
            Home
          </NavLink>
          <span className="btn btn-outline-primary" onClick={handleShow}>
            Create Post
          </span>
          <PostModal showModal={showPostModal} handleClose={handleClose}/>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
