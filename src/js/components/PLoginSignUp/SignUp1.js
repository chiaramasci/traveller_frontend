// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/cLoginSignUp";

function mapDispatchToProps(dispatch) {
  return {
    login: loginInfo => dispatch(login(loginInfo))
  };
}
class ConnectedLogin extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.currentStep !== 1) {
      // Prop: The current step
      return null;
    }

    return (
      <div>
        <link rel="stylesheet" href="/css/signup1.css" />
        <label htmlFor="title" className="text-center text-uppercase">
          <h1>INSERT LOGIN INFO</h1>
        </label>
        <div className="form-group container">
          <label data-icon="u">
            <i class="fa fa-envelope" />
            <input
              type="text"
              className="form-control"
              id="email"
              value={this.props.email}
              onChange={this.props.handleChange}
              placeholder="email"
              required
            />
          </label>

          <label data-icon="u">
            <i class="fa fa-lock" />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              id="password"
              value={this.props.password}
              onChange={this.props.handleChange}
              required
            />
          </label>
        </div>
      </div>
    );
  }
}

//null as no mapStateToProps is present
const Login = connect(
  null,
  mapDispatchToProps
)(ConnectedLogin);
export default Login;
