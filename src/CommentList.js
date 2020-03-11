import React from "react";
import { useParams } from "react-router-dom";

function CommentList({ handleDeleteComment, comments }) {

  const { postId } = useParams()
  const showComments = () => (
    comments.map(comment => (
      <span>
        <button onClick={() => handleDeleteComment({ postId, commentId: comment.id })}>X</button>
        <span>{comment.text}</span>
      </span>
    ))
  );

  return (
    <div className="CommentList">
      {showComments()}
    </div>
  )
}

export default CommentList;