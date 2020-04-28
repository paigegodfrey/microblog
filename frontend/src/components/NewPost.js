import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPostToAPI } from "../actions/posts";
import PostForm from "../components/PostForm";
import "./NewPost.css";

const NewPost = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const EMPTY_POST_DATA = { title: "", description: "", body: "" };

  const add = ({ title, description, body }) => {
    dispatch(sendPostToAPI(title, description, body));
    history.push("/");
  };

  return (
    <main>
      <h1>New Post</h1>
      <PostForm post={EMPTY_POST_DATA} save={add} />
    </main>
  );
}

export default NewPost;
