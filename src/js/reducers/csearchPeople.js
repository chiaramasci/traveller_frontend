import { SEARCH_PEOPLE } from "../constants/cSearchPeople";

const CSearchPeople_state = {
  listPeople: []
};

export default function CSearchPeople(state = CSearchPeople_state, action) {
  switch (action.type) {
    case SEARCH_PEOPLE:
      return state;
    default:
      return state;
  }
}
