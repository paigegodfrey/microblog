import { ADD_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";
import cloneDeep from 'lodash/cloneDeep';

const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {

  let stateDeepCopy = cloneDeep(state);
  let postId;
  let selectedPost;
  let comment;

  switch (action.type) {

    case ADD_POST:
      // where payload is {id: { title, description, body } }
      let newPost = action.payload;
      stateDeepCopy.posts = { ...stateDeepCopy.posts, ...newPost };
      return stateDeepCopy;

    case DELETE_POST:
      // where payload is {postId: #}
      ({ postId } = action.payload);
      delete stateDeepCopy.posts[postId];
      return stateDeepCopy;

    case ADD_COMMENT:
      // where payload is {postId: #, comment: {}}
      ({ postId, comment } = action.payload);
      selectedPost = stateDeepCopy.posts[postId];
      selectedPost.comments.push(comment);

      return stateDeepCopy;

    case DELETE_COMMENT:
      
      let { commentId } = action.payload;
      ({ postId } = action.payload);
      selectedPost = stateDeepCopy.posts[postId];

      let updatedComments = selectedPost.comments
        .filter(comment => comment.id !== commentId);

      selectedPost.comments = updatedComments;

      return { ...stateDeepCopy };

    default:
      return state;
  }
}

export default rootReducer;
