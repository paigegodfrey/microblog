import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ title, vote }) => {
  return (
    <div key={title.id} className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <Link to={"/" + title.id}>{title.title}</Link>
          </div>
          <div className="card-text">
            <i>{title.description}</i>
          </div>
        </div>
        <div className="card-footer">
          <small>{title.votes} votes</small>
          <i className="fas fa-thumbs-up text-success ml-2"
            onClick={() => vote("up", title.id)} />
          <i className="fas fa-thumbs-down text-danger ml-2"
            onClick={() => vote("down", title.id)} />
        </div>
      </div>
    </div>
  )
}

export default PostCard;