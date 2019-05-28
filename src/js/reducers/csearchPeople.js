/**
 * Reducer for the controller SearchPeople
 */

import { SEARCH_PEOPLE, UPDATE_LOCATION } from "../constants/cSearchPeople";

const CSearchPeople_state = {
  people_list: [{ id: 1, name: "Chiara" }],
  location: { lat: 0, lon: 0 }
};

//TODO: update list from actions
export default function CSearchPeople(state = CSearchPeople_state, action) {
  switch (action.type) {
    case SEARCH_PEOPLE:
      return Object.assign({}, state, {
        people_list: [].concat(action.payload)
      });
    case UPDATE_LOCATION:
      // return Object.assign({}, state, {
      //   location: action.payload
      // });
      return state;
    default:
      return state;
  }
}
