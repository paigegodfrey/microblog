import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPostToAPI } from "../actions/posts";
import PostForm from "./PostForm";
import "./PostModal.css";

const PostModal = () => {

  const [modalShowing, setModalShowing] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const EMPTY_POST_DATA = { title: "", description: "", body: "" };

  const add = ({ title, description, body }) => {
    dispatch(sendPostToAPI(title, description, body));
    history.push("/");
  };

  return (
    <main>
      <h2>Create Post</h2>
      <PostForm post={EMPTY_POST_DATA} save={add} />
    </main>
  );
}

export default PostModal;
