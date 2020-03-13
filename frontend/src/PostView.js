import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePostFromAPI } from './actions';

function PostView({handleToggle, title, description, body}) {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeletePost = (data) => {
    dispatch(deletePostFromAPI(data));
    history.push('/');
  }

  return (
    <div className="PostView">
      <div className="posts">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{body}</p>
        <button onClick={handleToggle}>Edit</button>
        <button onClick={() => handleDeletePost({postId})}>Delete</button>
      </div>
    </div>
  )
}

export default PostView;