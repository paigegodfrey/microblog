import { 
  GET_POSTS, 
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST, 
  ADD_COMMENT, 
  DELETE_COMMENT } 
from "./actionTypes";
import axios from "axios";

const BASE_URL = 'http://localhost:5000';

export function getPostsFromAPI() {
  return async function(dispatch) {
    let res = await axios.get(`${BASE_URL}/api/posts`);
    dispatch(getPosts(res.data));
  };
}

export function getPostFromAPI(params) {
  return async function(dispatch) {
    let res = await axios.get(`${BASE_URL}/api/posts/${params.postId}`);
    dispatch(getPost(res.data));
  };
}

export function addPostToAPI(params) {
  return async function(dispatch) {
    let res = await axios.post(`${BASE_URL}/api/posts`, params);
    dispatch(addPost(res.data));
  };
}

export function editPostFromAPI(params) {
  return async function(dispatch) {
    let res = await axios.put(`${BASE_URL}/api/posts/${params.postId}`, params.data);
    dispatch(editPost(res.data));
  };
}

export function deletePostFromAPI(params) {
  return async function(dispatch) {
    await axios.delete(`${BASE_URL}/api/posts/${params.postId}`);
    dispatch(deletePost({postId: params.postId}));
  };
}

export function addCommentToAPI(params) {
  return async function(dispatch) {
    let res = await axios.post(`${BASE_URL}/api/posts/${params.postId}/comments`, params.data);
    dispatch(addComment({postId: params.postId, data: res.data}));
  };
}

export function deleteCommentFromAPI(params) {
  return async function(dispatch) {
    await axios.delete(`${BASE_URL}/api/posts/${params.postId}/comments/${params.commentId}`);
    dispatch(deleteComment({postId: params.postId, commentId: params.commentId}));
  };
}

function getPosts(data) {
  return {
    type: GET_POSTS,
    payload: data
  };
}

function getPost(data) {
  return {
    type: GET_POST,
    payload: data
  };
}

function addPost(data) {
  return {
    type: ADD_POST,
    payload: data
  };
}

function editPost(data) {
  return {
    type: EDIT_POST,
    payload: data
  };
}

function deletePost(data) {
  return {
    type: DELETE_POST,
    payload: data
  };
}

function addComment(data) {
  return {
    type: ADD_COMMENT,
    payload: data
  };
}

function deleteComment(data) {
  return {
    type: DELETE_COMMENT,
    payload: data
  };
}