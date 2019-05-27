export function getListChats() {
  return function(dispatch) {
    return fetch("http://127.0.0.1:5000/getlistchats/", {
      "Content-Type": "application/json",
      Accept: "application/json"
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
        if (text == "NOT_LOGGED") {
          dispatch({ type: "NOT_LOGGED", payload: text });
        } else {
          dispatch({ type: "CHATS_LOADED", payload: text });
        }
      });
  };
}

export function getChatMessages() {
  return function(dispatch, getState) {
    return fetch("http://127.0.0.1:5000/getchatmessages/", {
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

    return fetch("http://127.0.0.1:5000/addmessage", {
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
