// src/js/components/App.jsx
import React from "react";
import UnloggedRouter from "./js/components/Routers/UnloggedRouter";
import LoggedRouter from "./js/components/Routers/LoggedRouter";
import OrgRouter from "./js/components/Routers/OrgRouter";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { user_id: state.user_id };
};

class ConnectedApp extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "UnloggedRouter"
    };
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleLocation(e) {
    console.log(e.target.id);
    this.setState({ location: e.target.id });
  }

  render() {
    return (
      <div>
        {/* TODO: user_id seems not to be updated after login */}
        {/* <p>dai dai dai {this.props.user_id}</p> */}
        <LoggedRouter
          id="LoggedRouter"
          handleLocation={this.handleLocation}
          location={this.state.location}
        />
        <UnloggedRouter
          id="UnloggedRouter"
          handleLocation={this.handleLocation}
          location={this.state.location}
        />
        <OrgRouter
          id="OrgRouter"
          handleLocation={this.handleLocation}
          location={this.state.location}
        />
      </div>
    );
  }
}
const App = connect(mapStateToProps)(ConnectedApp);
export default App;
