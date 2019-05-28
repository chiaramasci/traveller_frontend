// src/js/components/App.jsx
import React from "react";
import UnloggedRouter from "./js/components/Routers/UnloggedRouter";
import LoggedRouter from "./js/components/Routers/LoggedRouter";
import OrgRouter from "./js/components/Routers/OrgRouter";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return { user_id: state.CUser.user_id };
};

class ConnectedApp extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "UnloggedRouter",
      logged: 0
    };
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleLocation(e) {
    console.log(e.target.id);
    this.setState({ location: e.target.id });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user_id !== "") {
      this.setState({ location: "LoggedRouter", logged: 1 });
    } else {
      this.setState({ location: "UnloggedRouter", logged: 0 });
    }
  }

  render() {
    return (
      <div>
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
          logged={this.state.logged}
        />
      </div>
    );
  }
}
const App = connect(mapStateToProps)(ConnectedApp);
export default App;
