import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePostFromAPI } from './actions';

const PostDisplay = ({ handleToggle, title, description, body }) => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDeletePost = (data) => {
    dispatch(deletePostFromAPI(data));
    history.push('/');
  }

  return (
    <div className="PostDisplay">
      <div>
        <h2>{title}</h2>
        <p><i>{description}</i></p>
        <div>{body}</div>
      </div>
      <div className="PostDisplay-right">
        <div className="PostDisplay-edit-area">
          <i className="fas fa-edit text-primary"
            onClick={handleToggle} />
          <i className="fas fa-times text-danger"
            onClick={() => handleDeletePost({ postId })} />
        </div>
        {/* <div className="PostDisplay-votes"> */}
        {/* <b>{votes} votes:</b>

        <i className="fas fa-thumbs-up text-success"
            onClick={doVoteUp} />
        <i className="fas fa-thumbs-down text-danger"
            onClick={doVoteDown} /> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default PostDisplay;