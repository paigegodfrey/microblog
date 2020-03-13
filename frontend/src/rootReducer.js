import { 
  GET_POSTS, 
  GET_POST, 
  ADD_POST, 
  EDIT_POST,
  DELETE_POST, 
  ADD_COMMENT, 
  DELETE_COMMENT } from "./actionTypes";
import cloneDeep from 'lodash/cloneDeep';

const INITIAL_STATE = { posts: {}, titles: [] };

function rootReducer(state = INITIAL_STATE, action) {

  let stateDeepCopy = cloneDeep(state);
  let postId;
  let selectedPost;
  let commentId;

  switch (action.type) {
    case GET_POSTS:
      // where payload is [ { id, title, description, votes }, {...} } ] 
      let allTitlesData = action.payload;
      stateDeepCopy.titles = allTitlesData;
      return stateDeepCopy;

    case GET_POST:
      // where payload is { id, title, description, body, votes, 
      //                    comments: [ { id, text }, ...] }
      selectedPost = action.payload;
      stateDeepCopy.posts[selectedPost.id] = selectedPost;
      delete stateDeepCopy.posts[selectedPost.id].id;
      return stateDeepCopy;

    case ADD_POST:
      // where payload is { id, title, description, body, votes }
      let newPostData = action.payload;
      stateDeepCopy.titles = [...stateDeepCopy.titles, newPostData];
      return stateDeepCopy;

    case EDIT_POST:
      // where payload is { id, title, description, body, votes }
      let editPostData = action.payload;
      let idx = stateDeepCopy.titles.findIndex(title => title.id === editPostData.id);
      stateDeepCopy.titles[idx] = editPostData;
      return stateDeepCopy;

    case DELETE_POST:
      // where payload is { postId }
      ({ postId } = action.payload);
      delete stateDeepCopy.posts[postId];
      return stateDeepCopy;

    case ADD_COMMENT:
      // where payload is { postId, data: { id, text } }
      ({ postId } = action.payload);
      let commentData = action.payload.data;
      selectedPost = stateDeepCopy.posts[postId];
      selectedPost.comments.push(commentData);
      return stateDeepCopy;

    case DELETE_COMMENT:
      // where payload is { postId, commentId }
      ({ postId, commentId } = action.payload);
      console.log(action.payload);

      selectedPost = stateDeepCopy.posts[postId];
      let updatedComments = selectedPost.comments
        .filter(comment => comment.id !== commentId);
      selectedPost.comments = updatedComments;
      return stateDeepCopy;

    default:
      return state;
  }
}

export default rootReducer;
