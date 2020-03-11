import { ADD_POST, DELETE_POST } from "./actionTypes";

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