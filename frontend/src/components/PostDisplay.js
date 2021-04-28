import React from 'react';
import "./PostDisplay.css";

const PostDisplay = ({doVote, toggleEdit, deletePost, post}) => {
  const doVoteUp = () => {
    doVote("up");
  }

  const doVoteDown = () => {
    doVote("down");
  }

  const { title, description, body, votes } = post;

  return (
    <div className="PostDisplay">
        <div className="mt-4">
          <h2>{title}</h2>
          <p><i>{description}</i></p>
          <div>{body}</div>
        </div>

        <div className="PostDisplay-right">
          <div className="PostDisplay-edit-area">
            <i className="fas fa-edit text-primary"
                onClick={toggleEdit} />
            <i className="fas fa-times text-danger"
                onClick={deletePost} />
          </div>
          <div className="PostDisplay-votes">
            <b>{votes} votes:</b>

            <i className="fas fa-thumbs-up text-success"
                onClick={doVoteUp} />
            <i className="fas fa-thumbs-down text-danger"
                onClick={doVoteDown} />
          </div>
        </div>
    </div>
  );
}

export default PostDisplay;