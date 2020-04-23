import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sendCommentToAPI } from './actions';

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
    dispatch(sendCommentToAPI(data));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddComment({ postId, data: formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input onChange={handleChange}
            id="commentform-text"
            name="text"
            size="50"
            placeholder="New Comment"
            className="form-control"
            value={formData.text} />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  )
}

export default CommentForm;