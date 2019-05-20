import { UPDATE_PROFILE, GET_USER_INFO } from "../constants/cUser";

const CUser_state = {
  profileInfo: []
};

export default function CUser(state = CUser_state, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return state;
    case GET_USER_INFO:
      return state;
    default:
      return state;
  }
}
