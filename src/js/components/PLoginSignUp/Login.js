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
    this.state = {
      email: "",
      password: "",
      lat: 0,
      lon: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const { email } = this.state.email;
    const { password } = this.state.password;
    const { lat } = this.state.email;
    const { lon } = this.state.password;
    this.props.login(this.state);
    // this.setState({ login: "", password: "" });
  }
  render() {
    const { email } = this.state.email;
    const { password } = this.state.password;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

//null as no mapStateToProps is present
const Login = connect(
  null,
  mapDispatchToProps
)(ConnectedLogin);
export default Login;
