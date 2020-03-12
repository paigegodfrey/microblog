import { ADD_POST, GET_POST, GET_POSTS, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";
import cloneDeep from 'lodash/cloneDeep';

const INITIAL_STATE = { posts: {}, titles: {} };

function rootReducer(state = INITIAL_STATE, action) {

  let stateDeepCopy = cloneDeep(state);
  let postId;
  let selectedPost;
  let comment;

  switch (action.type) {
    case GET_POSTS:
      // where payload is [ { id, title, description, votes }, {...} }]
      let titles = {};
      let allTitlesData = action.payload;
      allTitlesData.forEach(title => {
        titles[title.id]=title;
        delete titles[title.id].id;
      });
      stateDeepCopy.titles = titles;
      return stateDeepCopy;

    case GET_POST:
      // where payload is  { id, title, description, body, votes, comments: [{id,text}...] }
      selectedPost = action.payload;
      stateDeepCopy.posts[selectedPost.id] = selectedPost
      delete stateDeepCopy.posts[selectedPost.id].id
      return stateDeepCopy;

    case ADD_POST:
      // where payload is {id: { title, description, body } }
      let newPostData = action.payload;
      stateDeepCopy.titles[newPostData.id] = newPostData
      delete stateDeepCopy.titles[newPostData.id].id
      return stateDeepCopy;

    case DELETE_POST:
      // where payload is {postId: #}
      ({ postId } = action.payload);
      delete stateDeepCopy.titles[postId];
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
