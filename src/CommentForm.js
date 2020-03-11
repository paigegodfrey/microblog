import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CommentForm({ post, setComments }) {

  const INITIAL_STATE = {
    comment: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setComments(comments => [...comments, { ...formData, id: uuid(), postId: post.id }]);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="Comment">
      <form onSubmit={handleSubmit}>
        <input required
          type="text"
          name="comment"
          placeholder="New Comment"
          value={formData.comment}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default CommentForm;