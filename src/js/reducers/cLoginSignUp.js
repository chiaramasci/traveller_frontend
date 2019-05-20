import { CREATE_DB_USER, LOGIN } from "../constants/cLoginSignUpUser";

const CLoginUser_state = {
  createUser: [],
  loginUser: []
};

export default function CLoginUser(state = CLoginUser_state, action) {
  switch (action.type) {
    case CREATE_DB_USER:
      return state;
    case LOGIN:
      return state;
    default:
      return state;
  }
}
