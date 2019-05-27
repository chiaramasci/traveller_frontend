// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { createDBUser } from "../../actions/cLoginSignUp";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";
import SignUp5 from "./SignUp5";

function mapDispatchToProps(dispatch) {
  return {
    signup: userInfo => dispatch(createDBUser(userInfo))
  };
}
class ConnectedSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      name: "",
      surname: "",
      birthday: "",
      nationality: "",
      url_picture: "",
      languages: [],
      interests: "",
      bio: "",
      lat: 0,
      lon: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary float-left"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 5) {
      return (
        <button className="btn float-right" type="button" onClick={this._next}>
          Next
        </button>
      );
    } else if (currentStep == 5) {
      return (
        <button
          className="btn float-right"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.signup(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} id="signup">
          <SignUp1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            password={this.state.password}
          />
          <SignUp2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            name={this.state.name}
            surname={this.state.surname}
            birthday={this.state.birthday}
          />
          <SignUp3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            nationality={this.state.nationality}
            languages={this.state.languages}
          />
          <SignUp4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            interests={this.state.interests}
          />
          <SignUp5
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            url_picture={this.state.url_picture}
            bio={this.state.bio}
          />
          <div id="buttonsfascia">
            {this.previousButton}
            {this.nextButton}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

//null as no mapStateToProps is present
const SignUp = connect(
  null,
  mapDispatchToProps
)(ConnectedSignUp);
export default SignUp;
