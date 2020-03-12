import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CommentList({ handleDeleteComment }) {

  
  const { postId } = useParams()
  const comments = useSelector(st => st.posts[postId].comments)
  
  const showComments = () => (
    comments.map(comment => (
      <span key={comment.id}>
        <button onClick={() => handleDeleteComment({postId, commentId: comment.id })}>X</button>
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