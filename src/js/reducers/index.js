// src/js/reducers/index.js

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [{ title: "React Redux Tutorial for Beginners", id: 1 }]
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    console.log("reducer:" + action.payload.title);
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  return state;
}
export default rootReducer;
