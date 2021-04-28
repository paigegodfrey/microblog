import React, { useState } from 'react';

const PostForm = ({ post, save, close }) => {

  const { title, description, body } = post;
  const [postData, setPostData] = useState({ title, description, body });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setPostData(data => ({
      ...data,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    save(postData);
    close();
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="editform-title">Title:</label>
        <input onChange={handleChange}
          id="editform-title"
          name="title"
          className="form-control"
          value={postData.title} 
          required />
      </div>
      <div className="form-group">
        <label htmlFor="editform-description">Description:</label>
        <input onChange={handleChange}
          id="editform-description"
          name="description"
          className="form-control"
          value={postData.description} 
          required />
      </div>
      <div className="form-group">
        <label htmlFor="editform-body">Body:</label>
        <textarea onChange={handleChange}
          id="editform-body"
          name="body"
          className="form-control"
          rows={10}
          value={postData.body} />
      </div>
      <div onClick={close} className="btn btn-outline-primary">Cancel</div>
      <button onSubmit={handleSubmit} className="btn btn-primary float-right">Save</button>
    </form>
  );
}

export default PostForm;