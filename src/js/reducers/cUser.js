import {
  UPDATE_PROFILE,
  GET_USER_INFO,
  LOGGED_IN,
  LOGGED_OUT
} from "../constants/cUser";

const CUser_state = {
  user_id: "",
  userInfo: {
    name: "Chiara",
    surname: "Masci",
    url_picture: "lala.png",
    nationality: "Italian",
    bio: "awesome bio",
    languages: ["Italian", "English", "German"],
    interests: ["electronics", "climbing"]
  }
};

export default function CUser(state = CUser_state, action) {
  switch (action.type) {
    case LOGGED_IN:
      return Object.assign({}, state, {
        user_id: action.payload
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        user_id: ""
      });
    case UPDATE_PROFILE:
      return state;
    case GET_USER_INFO:
      return state;
    default:
      return state;
  }
}
