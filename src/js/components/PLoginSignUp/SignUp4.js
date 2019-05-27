// src/js/components/Form.jsx
import React, { Component } from "react";
import Checkbox from "./com-Checkbox";

class SignUp4 extends Component {
  render() {
    if (this.props.currentStep !== 4) {
      // Prop: The current step
      return null;
    }

    return (
      <div className="form-group">
        <link rel="stylesheet" href="/css/signup1.css" />
        <label htmlFor="title" className="text-center text-uppercase">
          <h1>INTERESTS</h1>
        </label>

        <div>
          <Checkbox text="food" />
          <Checkbox text="tech" />
          <Checkbox text="movies" />
          <Checkbox text="plants" />
          <Checkbox text="sing" />
          <Checkbox text="books" />
          <Checkbox text="sport" />
          <Checkbox text="music" />
          <Checkbox text="animals" />
          <Checkbox text="meditation" />
        </div>
      </div>
    );
  }
}

export default SignUp4;
