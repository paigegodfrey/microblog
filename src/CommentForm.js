import React, { useState, useContext } from "react";
import BlogPostContext from "./BlogPostContext";
import { v4 as uuid } from "uuid";

function CommentForm({ post }) {

  const { setComments } = useContext(BlogPostContext);

  const INITIAL_STATE = {
    text: ""
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
    setComments(comments => [...comments,
      {
        ...formData,
        id: uuid(),
        postId: post.id
      }
    ]);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="Comment">
      <form onSubmit={handleSubmit}>
        <input required
          type="text"
          name="text"
          placeholder="New Comment"
          value={formData.text}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default CommentForm;