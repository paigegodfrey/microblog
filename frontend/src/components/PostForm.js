import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { sendPostToAPI, editPostInAPI } from "./actions"

const PostForm = ({ postId, title, description, body }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const INITIAL_STATE = {
    title: title || "",
    description: description || "",
    body: body || ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleAddPost = (data) => {
    dispatch(sendPostToAPI(data));
  }

  const handleEditPost = (data) => {
    dispatch(editPostInAPI(data));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postId ? handleEditPost({ postId, data: formData })
      : handleAddPost(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  const cancel = () => {
    history.push("/");
  }

  return (
    <div>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="editform-title">Title:</label>
          <input required
            onChange={handleChange}
            id="editform-title"
            name="title"
            className="form-control"
            value={formData.title} />
        </div>
        <div className="form-group">
          <label htmlFor="editform-description">Description:</label>
          <input required
            onChange={handleChange}
            id="editform-description"
            name="description"
            className="form-control"
            value={formData.description} />
        </div>
        <div className="form-group">
          <label htmlFor="editform-body">Body:</label>
          <textarea required
            onChange={handleChange}
            id="editform-body"
            name="body"
            className="form-control"
            rows={10}
            value={formData.body} />
        </div>
        <button className="btn btn-primary mr-2">Save</button>
      </form>
      <button onClick={cancel} className="btn btn-secondary">Cancel</button>
    </div>
  );
}

export default PostForm;