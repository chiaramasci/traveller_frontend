/**
 * Reducer for the controller LoginSignUp
 */

import {
  CREATE_DB_USER,
  LOGIN,
  LOGGED_IN,
  LOGGED_OUT
} from "../constants/cLoginSignUpUser";

const CLoginUser_state = {
  user_id: ""
};

export default function CLoginUser(state = CLoginUser_state, action) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        user_id: action.payload
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        user_id: ""
      });
    case CREATE_DB_USER:
      return Object.assign({}, state, {
        user_id: action.payload
      });
    case LOGIN:
      return state;
    default:
      return state;
  }
}
