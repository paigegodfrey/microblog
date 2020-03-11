import React, { useState, useContext } from "react";
import BlogPostContext from "./BlogPostContext";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

function BlogPostForm() {

  const { setPosts } = useContext(BlogPostContext);

  const INITIAL_STATE = {
    title: "",
    description: "",
    body: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPosts(posts => [...posts, {...formData, id: uuid()}]);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  const cancel = () => {
    setFormData(INITIAL_STATE);
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
        <button onClick={cancel}>Cancel</button>
      </form>
    </div>
  );
}

export default BlogPostForm;