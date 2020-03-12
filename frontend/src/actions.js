import { ADD_POST, DELETE_POST, GET_POSTS, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";
import axios from "axios";

const BASE_URL = 'http://localhost:5000';

export function getPostsFromAPI() {
  return async function(dispatch) {
    let res = await axios.get(`${BASE_URL}/api/posts`);
    dispatch(getPosts(res.data));
  };
}

function getPosts(data) {
  return {
    type: GET_POSTS,
    payload: data
  };
}

export function addPostWithAPI(params) {
  return async function(dispatch) {
    let res = await axios.post(`${BASE_URL}/api/posts`, params);
    dispatch(addPost(res.data));
  };
}

function addPost(data) {
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


