import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";

export function addPost(data) {
  return {
    type: ADD_POST,
    payload: data
  };
}

export function deletePost(data) {
  return {
    type: DELETE_POST,
    payload: data
  };
}

export function addComment(data) {
  return {
    type: ADD_COMMENT,
    payload: data
  };
}

export function deleteComment(data) {
  return {
    type: DELETE_COMMENT,
    payload: data
  };
}