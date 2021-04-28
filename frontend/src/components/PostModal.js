import React from "react";
import { useDispatch } from "react-redux";
import { sendPostToAPI } from "../actions/posts";
import PostForm from "./PostForm";
import Modal from 'react-bootstrap/Modal';
import "./PostModal.css";

const PostModal = ({ showModal, handleClose }) => {

  const dispatch = useDispatch();

  const EMPTY_POST_DATA = { title: "", description: "", body: "" };

  const add = ({ title, description, body }) => {
    dispatch(sendPostToAPI(title, description, body));
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostForm post={EMPTY_POST_DATA} save={add} close={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostModal;
