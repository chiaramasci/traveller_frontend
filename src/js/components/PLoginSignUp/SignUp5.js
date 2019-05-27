// src/js/components/Form.jsx
import React, { Component } from "react";

class SignUp5 extends Component {
  render() {
    if (this.props.currentStep !== 5) {
      // Prop: The current step
      return null;
    }

    return (
      <div>
        <link rel="stylesheet" href="/css/signup1.css" />
        <label htmlFor="title" className="text-center text-uppercase">
          <h1>PROFILE PICTURE AND SHORT BIO</h1>
        </label>
        <div className="form-group">
          <div class="image-upload-wrap">
            <input class="file-upload-input" type="file" accept="image/" />
            <div class="file-upload-content">
              <img
                class="file-upload-image"
                src="/img/avatar.jpeg"
                alt="your image"
              />
              <div class="image-title-wrap" />
            </div>
          </div>
          <label>
            <input
              type="text"
              className="form-control"
              id="bio"
              placeholder="Tell us something more about yourself :)"
              value={this.props.bio}
              onChange={this.props.handleChange}
              required
            />
          </label>
        </div>
      </div>
    );
  }
}

export default SignUp5;
