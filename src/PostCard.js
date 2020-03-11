import React from "react";
import { Link } from "react-router-dom";

function PostCard({ title, description, id }) {

  return (
    <div>
      <p><Link to={`/${id}`}>{title}</Link></p>
    <p>{description}</p>
    </div>
  )
}

export default PostCard;