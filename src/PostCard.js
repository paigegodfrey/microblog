import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {

  return (
    <div>
      <p><Link to={`/${post.id}`}>{post.title}</Link></p>
      <p>{post.description}</p>
    </div>
  )
}

export default PostCard;