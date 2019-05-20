// src/js/components/App.jsx
import React from "react";
import List from "./js/components/List";
import Form from "./js/components/Form";
import Post from "./js/components/Post";
import Login from "./js/components/PLoginSignUp/Login";

const App = () => (
  <div className="row mt-5">
    {/* <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>

    <div className="col-md-4 offset-md-1">
      <h2>Post</h2>
      <Post />
    </div> */}
    <Login />
  </div>
);
export default App;
