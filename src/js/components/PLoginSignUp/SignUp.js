// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { createDBUser } from "../../actions/cLoginSignUp";

function mapDispatchToProps(dispatch) {
  return {
    signup: userInfo => dispatch(createDBUser(userInfo))
  };
}
class ConnectedSignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      surname: "",
      birthday: "",
      nationality: "",
      url_picture: "",
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
    this.props.signup(this.state);
    // this.setState({ login: "", password: "" });
  }
  render() {
    const { email } = this.state.email;
    const { password } = this.state.password;
    const { name } = this.state.name;
    const { surname } = this.state.surname;
    const { birthday } = this.state.birthday;
    const { nationality } = this.state.nationality;
    const { url_picture } = this.state.url_picture;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">SIGN UP</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                email
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                password
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                surname
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="surname"
              value={surname}
              onChange={this.handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                birthday
              </span>
            </div>
            <input
              type="date"
              className="form-control"
              id="birthday"
              value={birthday}
              onChange={this.handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                nationality
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="nationality"
              value={nationality}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

//null as no mapStateToProps is present
const SignUp = connect(
  null,
  mapDispatchToProps
)(ConnectedSignUp);
export default SignUp;
