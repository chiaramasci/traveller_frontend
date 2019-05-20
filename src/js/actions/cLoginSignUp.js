import { CREATE_DB_USER, LOGIN } from "../constants/cLoginSignUpUser";

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

    return fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      "Content-Type": "application/json",
      Accept: "text/plain",
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(text => {
        // dispatch({ type: "DATA_LOADED", payload: json });
        console.log(text);
      });
  };
}
