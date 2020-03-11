import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import PostForm from "./PostForm";
import PostView from "./PostView";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

function Post() {
  const posts = useSelector(st => st.posts);

  return (
    <div>
      TEST POST CONTAINER
    </div>
  )
}

export default Post;