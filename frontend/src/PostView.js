import React from "react";
import { useParams, useHistory } from "react-router-dom";

function PostView({handleToggle, handleDeletePost, title, description, body}) {
  const { postId } = useParams();
  const history = useHistory();

  const remove = () => {
    handleDeletePost({postId});
    history.push('/');
  }

  return (
    <div className="PostView">
      <div className="posts">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{body}</p>
        <button onClick={handleToggle}>Edit</button>
        <button onClick={remove}>Delete</button>
      </div>
    </div>
  )
}

export default PostView;