/**
 * Reducer for the controller MessagePeople
 */

import {
  GET_LIST_CHATS,
  GET_CHAT_MESSAGES,
  ADD_MESSAGE
} from "../constants/cMessagePeople";

const CMessagePeople_state = {
  listConversations: [],
  listMessages: []
};

export default function CSearchPeople(state = CMessagePeople_state, action) {
  switch (action.type) {
    case GET_LIST_CHATS:
      return Object.assign({}, state, {
        listConversations: [].concat(action.payload)
      });
    case GET_CHAT_MESSAGES:
      return state;
    case ADD_MESSAGE:
      return state;
    default:
      return state;
  }
}
