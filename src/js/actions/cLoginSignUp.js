import {
  CREATE_DB_USER,
  LOGIN,
  LOGGED_IN,
  ERROR,
  LOGGED_OUT
} from "../constants/cLoginSignUpUser";

//"https://traveller-friendeller19872.appspot.com
const API_URL = "http://127.0.0.1:5000";

export function login(loginInfo) {
  return function(dispatch, getState) {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const lat = loginInfo.lat;
    const lon = loginInfo.lon;

    const data = {
      email: email,
      password: password,
      lat: lat,
      lon: lon
    };

    console.log(JSON.stringify(data));

    return fetch(API_URL + "/login", {
      method: "POST",
      "Content-Type": "application/json",
      Accept: "text/plain",
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
        if (text != "WRONG") {
          dispatch({ type: LOGGED_IN, payload: text });
        } else {
          dispatch({ type: ERROR, payload: text });
        }
      });
  };
}

export function createDBUser(userInfo) {
  return function(dispatch, getState) {
    const email = userInfo.email;
    const password = userInfo.password;
    const lat = userInfo.lat;
    const lon = userInfo.lon;
    const name = userInfo.name;
    const surname = userInfo.surname;
    const birthday = userInfo.birthday;
    const nationality = userInfo.nationality;
    const url_picture = userInfo.url_picture;

    const data = {
      email: email,
      password: password,
      lat: lat,
      lon: lon,
      name: name,
      surname: surname,
      birthday: birthday,
      nationality: nationality,
      url_picture: url_picture
    };

    console.log(JSON.stringify(data));

    return fetch(API_URL + "/createprofile", {
      method: "POST",
      "Content-Type": "application/json",
      Accept: "text/plain",
      crossDomain: true,
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
        if (text != "WRONG") {
          dispatch({ type: "LOGGED_IN", payload: text });
        } else {
          dispatch({ type: "ERROR", payload: text });
        }
      });
  };
}

export function logout() {
  return function(dispatch, getState) {
    return fetch(API_URL + "/logout", {
      Accept: "text/plain",
      credentials: "include"
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
        if (text != "WRONG") {
          dispatch({ type: LOGGED_OUT, payload: text });
        } else {
          dispatch({ type: "ERROR", payload: text });
        }
      });
  };
}
