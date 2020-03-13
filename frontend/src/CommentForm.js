import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CommentForm({handleAddComment}) {
  const { postId } = useParams();

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
    handleAddComment({postId, data: formData });
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