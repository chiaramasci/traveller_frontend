// src/js/components/Form.jsx
import React, { Component } from "react";
import TextInputTags from "./com-TextInputTags";

class SignUp3 extends Component {
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }

    return (
      <div>
        <link rel="stylesheet" href="/css/signup1.css" />
        <label htmlFor="title" className="text-center text-uppercase">
          <h1>NATIONALITY AND LANGUAGES</h1>
        </label>

        <div className="form-group container">
          <label data-icon="u">
            <input
              type="text"
              className="form-control"
              id="nationality"
              value={this.props.nationality}
              onChange={this.props.handleChange}
              required
              placeholder="Nationality"
            />
          </label>

          <label data-icon="u">
            <TextInputTags
              id="languages"
              value={this.props.languages}
              onChange={this.props.handleChange}
              placeholder="Write the languages that you know (separated by the Enter key)"
            />
          </label>
        </div>
      </div>
    );
  }
}

export default SignUp3;
