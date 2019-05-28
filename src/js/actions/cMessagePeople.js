//"https://traveller-friendeller19872.appspot.com
const API_URL = "http://127.0.0.1:5000";

//TODO: without using user_id. In order to do this, the session persistance has to be solved
export function getListChats(user_id) {
  return function(dispatch) {
    const data = {
      user_id: user_id
    };

    return fetch(API_URL + "/getlistchats/", {
      method: "POST",
      "Content-Type": "application/json",
      Accept: "application/json",
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
        // if (text == "NOT_LOGGED") {
        //   dispatch({ type: "NOT_LOGGED", payload: text });
        // } else {
        //   dispatch({ type: "CHATS_LOADED", payload: text });
        // }
      });
  };
}

export function getChatMessages() {
  return function(dispatch, getState) {
    return fetch(API_URL + "/getchatmessages/", {
      "Content-Type": "application/json",
      Accept: "application/json"
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        // if (json == "NOT_LOGGED") {
        //   dispatch({ type: "NOT_LOGGED", payload: text });
        // } else if (json == "ID_NOT_VALID") {
        //   dispatch({ type: "ID_NOT_VALID", payload: text });
        // } else {
        //   dispatch({ type: "PROFILE_LOADED", payload: text });
        // }
      });
  };
}

export function addMessage(message) {
  return function(dispatch, getState) {
    const text = message.text;
    const url_resource = message.url_resource;

    const data = {
      text: text,
      url_resource: url_resource
    };

    console.log(JSON.stringify(data));

    return fetch(API_URL + "/addmessage", {
      method: "POST",
      "Content-Type": "application/json",
      Accept: "text/plain",
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
        if (text != "WRONG") {
          dispatch({ type: "MESSAGE_SENT", payload: text });
        } else {
          dispatch({ type: "ERROR", payload: text });
        }
      });
  };
}
