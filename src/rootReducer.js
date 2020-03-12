import { ADD_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";
import cloneDeep from 'lodash/cloneDeep';

const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {

  let stateDeepCopy = cloneDeep(state);

  switch (action.type) {

    case ADD_POST:
      // where payload is {id: { title, description, body } }
      let newPost = action.payload;
      stateDeepCopy.posts = { ...stateDeepCopy.posts, ...newPost }
      return stateDeepCopy;

    case DELETE_POST:
      // where payload is {id: #}
      let { id } = action.payload;
      delete stateDeepCopy[id];
      return stateDeepCopy;

    case ADD_COMMENT:
      let { postId, comment } = action.payload;
      stateDeepCopy.posts[postId].comments.push(comment);
      return stateDeepCopy;

    case DELETE_COMMENT:
      let { commentId } = action.payload;
      let postIdDelete = action.payload.postId;

      let updatedComments = stateDeepCopy[postIdDelete].comments
        .filter(comment => comment.id !== commentId);
      stateDeepCopy[postIdDelete].comments = updatedComments;

      return { ...stateDeepCopy };

    default:
      return state;
  }
}

export default rootReducer;
