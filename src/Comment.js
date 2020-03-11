import React from "react";

function Comment({ comment }) {

  //remove comment function

  console.log(comment);

  return (
    <div className="Comment">
      <span>
        <button>X</button>
        <span>{comment.text}</span>
      </span>
    </div>
  )
}

export default Comment;