// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/cLoginSignUp";

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}
class ConnectedLogout extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <button onClick={this.handleSubmit} className="btn btn-success btn-lg">
        LOGOUT
      </button>
    );
  }
}

//null as no mapStateToProps is present
const Logout = connect(
  null,
  mapDispatchToProps
)(ConnectedLogout);
export default Logout;
