import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteCommentFromAPI } from './actions';

function CommentList() {
  const { postId } = useParams()
  const comments = useSelector(st => st.posts[postId].comments)
  const dispatch = useDispatch();

  const handleDeleteComment = (data) => {
    dispatch(deleteCommentFromAPI(data));
  }

  const showComments = () => (
    comments.map(comment => (
      <p key={comment.id}>
        <i
          className="fa fa-times text-danger mr-2"
          onClick={() => handleDeleteComment({ postId, commentId: comment.id })}
        />
        {comment.text}
      </p>
    ))
  );

  return (
    <div className="CommentList">
      {showComments()}
    </div>
  )
}

export default CommentList;