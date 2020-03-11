import { ADD_POST, DELETE_POST } from "./actionTypes";

const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case ADD_POST:
      let newPost = action.payload;
      return { ...state, newPost};
    
    case DELETE_POST:
      // where payload is {id: #}
      let { id } = action.payload;
      let stateCopy = {...state};
      delete stateCopy[id];
      return stateCopy;

    default:
      return state;
  }
}

export default rootReducer;
