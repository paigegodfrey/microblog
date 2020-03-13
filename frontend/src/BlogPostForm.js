import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function BlogPostForm({ handleAddPost, handleEditPost, postId, title, description, body }) {
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
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    postId ? handleEditPost({postId, data: formData}) :
      handleAddPost(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  const cancel = () => {
    history.push("/");
  }

  return (
    <div className="BlogPostForm">
      <form onSubmit={handleSubmit}>
        <h2>New Post</h2>
        <label htmlFor="title">Title:</label>
        <input required
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input required
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="recipe">Body:</label>
        <textarea required
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <button>Save</button>
      </form>
      <button onClick={cancel}>Cancel</button>
    </div>
  );
}

export default BlogPostForm;