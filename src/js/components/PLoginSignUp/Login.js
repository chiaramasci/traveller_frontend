// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/cLoginSignUp";
import { Redirect } from "react-router-dom";

function mapDispatchToProps(dispatch) {
  return {
    login: loginInfo => dispatch(login(loginInfo))
  };
}

const mapStateToProps = state => {
  return { user_id: state.CLoginSignUp.user_id };
};

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
    console.log("handleChange");
    console.log(this.state.password);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  renderRedirect = () => {
    if (this.props.user_id != "") {
      return <Redirect to="/social/find/" />;
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="login">
        {this.renderRedirect}
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
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" className="emailbtn" id="next">
          CONTINUE WITH EMAIL
        </button>
        <button type="button" class="googlebtn" id="next">
          <i class="fab fa-google" />
          CONTINUE WITH GOOGLE+
        </button>
        <div class="foot">
          <a href="#">
            <p>Already have an account?</p>
          </a>
        </div>
      </form>
    );
  }
}

//null as no mapStateToProps is present
const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedLogin);
export default Login;
