import React from "react";
import BlogPostForm from "./BlogPostForm";
import { useDispatch } from 'react-redux';
import { addPostWithAPI } from "./actions"

function NewPost() {
  const dispatch = useDispatch();

  
  const handleAddPost = (data) => {
    dispatch(addPostWithAPI(data));
  }

  return (
    <div>
      <BlogPostForm handleAddPost={handleAddPost} />
    </div>
  )
}

export default NewPost;
