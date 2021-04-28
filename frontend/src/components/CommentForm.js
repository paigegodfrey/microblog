import React, { useState } from 'react';

const CommentForm = ({ submitCommentForm }) => {
  const [text, setText] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    submitCommentForm(text);
    setText("");
  }

  const handleChange = evt => {
    setText(evt.target.value);
  }

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="input-group flex-grow-1">
          <input className="form-control"
            onChange={handleChange}
            id="comment-form-text"
            name="text"
            placeholder="New Comment"
            value={text}
          />
          <div className="input-group-append input-group-btn">
            <button className="btn btn-primary" style={{width: '70px'}}>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
