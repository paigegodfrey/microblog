import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {  addCommentToAPI } from './actions';

function CommentForm() {
  const { postId } = useParams();
  const dispatch = useDispatch();

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

  const handleAddComment = (data) => {
    dispatch(addCommentToAPI(data));
  }

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