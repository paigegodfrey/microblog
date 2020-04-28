import React from 'react';
import Comment from "./Comment"

const CommentList = ({comments, deleteComment}) => {
  return (
    comments.map(c => (
      <Comment key={c.id} id={c.id} text={c.text} deleteComment={deleteComment}/>
    )));
}

CommentList.defaultProps = {
  comments: []
};

export default CommentList;
