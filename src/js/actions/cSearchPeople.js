/**
 * Action functions for the controller SearchPeople
 */

import { SEARCH_PEOPLE, ERROR } from "../constants/cSearchPeople";

//"https://traveller-friendeller19872.appspot.com
const API_URL = "http://127.0.0.1:5000";

export function searchPeople(userInfo) {
  return function(dispatch, getState) {
    const user_id = userInfo.user_id;
    const lat = userInfo.lat;
    const lon = userInfo.lon;

    const data = {
      user_id: user_id,
      lat: lat,
      lon: lon
    };

    console.log(JSON.stringify(data));

    return fetch(API_URL + "/searchpeople", {
      method: "POST",
      "Content-Type": "application/json",
      Accept: "text/plain",
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json != null) {
          dispatch({ type: SEARCH_PEOPLE, payload: json });
        } else {
          dispatch({ type: ERROR, payload: json });
        }
      });
  };
}
