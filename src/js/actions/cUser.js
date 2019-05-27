//TODO: TEST
//"https://traveller-friendeller19872.appspot.com
const API_URL = "http://127.0.0.1:5000";

export function updateProfile(userInfo) {
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

    return fetch(API_URL + "/updateprofile", {
      method: "POST",
      "Content-Type": "application/json",
      Accept: "text/plain",
      body: JSON.stringify(data)
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
        if (text != "NOT_LOGGED") {
          dispatch({ type: "UPDATED_PROFILE", payload: text });
        } else {
          dispatch({ type: "NOT_LOGGED", payload: text });
        }
      });
  };
}

export function getUserInfo(userId) {
  return function(dispatch, getState) {
    const user_id = userId;

    const data = {
      user_id: user_id
    };

    console.log(JSON.stringify(data));

    return fetch(API_URL + "/getuserinfo/" + user_id, {
      "Content-Type": "application/json",
      Accept: "text/plain"
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
        if (text == "NOT_LOGGED") {
          dispatch({ type: "NOT_LOGGED", payload: text });
        } else if (text == "ID_NOT_VALID") {
          dispatch({ type: "ID_NOT_VALID", payload: text });
        } else {
          dispatch({ type: "PROFILE_LOADED", payload: text });
        }
      });
  };
}
