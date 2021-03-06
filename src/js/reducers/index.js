// src/js/reducers/index.js

// import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

// const initialState = {
//   articles: [],
//   remoteArticles: []
// };
// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   } else if (action.type === FOUND_BAD_WORD) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   }

//   if (action.type === "DATA_LOADED") {
//     return Object.assign({}, state, {
//       remoteArticles: state.remoteArticles.concat(action.payload)
//     });
//   }

//   return state;
// }
// export default rootReducer;

import { combineReducers } from "redux";
import CLoginSignUp from "./cLoginSignUp";
import CUser from "./cUser";
import CSearchPeople from "./csearchPeople";
import CMessagePeople from "./cMessagePeople";

const rootReducer = combineReducers({
  CLoginSignUp,
  CUser,
  CSearchPeople,
  CMessagePeople
});

export default rootReducer;
