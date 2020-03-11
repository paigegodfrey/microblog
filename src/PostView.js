import React from "react";
import { useParams } from "react-router-dom";

function PostView({handleToggle, handleDeletePost, title, description, body}) {
  const {id} = useParams();
  
  return (
    <div className="PostView">
      <div className="posts">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{body}</p>
        <button onClick={handleToggle}>Edit</button>
        <button onClick={()=>handleDeletePost(id)}>Delete</button>
      </div>
    </div>
  )
}

export default PostView;