// src/js/components/Form.jsx
import React, { Component } from "react";

class SignUp2 extends Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }

    return (
      <div>
        <link rel="stylesheet" href="/css/signup1.css" />
        <label htmlFor="title" className="text-center text-uppercase">
          <h1>NAME AND BIRTHDAY</h1>
        </label>
        <div className="form-group">
          <label data-icon="u">
            <i class="fa fa-user" />
            <input
              type="text"
              className="form-control label-two-inputs"
              id="name"
              value={this.props.name}
              onChange={this.props.handleChange}
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="form-control label-two-inputs"
              id="surname"
              value={this.props.surname}
              onChange={this.props.handleChange}
              placeholder="Surname"
              required
            />
          </label>
          <label data-icon="u">
            <i class="fa fa-birthday-cake" />
            <input
              type="date"
              className="form-control"
              id="birthday"
              value={this.props.birthday}
              onChange={this.props.handleChange}
              required
            />
          </label>
        </div>
      </div>
    );
  }
}

export default SignUp2;
