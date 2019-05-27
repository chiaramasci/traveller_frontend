import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpMaster from "../PLoginSignUp/SignUpMaster";
import Login from "../PLoginSignUp/Login";
import Home from "../Home";
import OrgHome from "../POrganization/OrgHome";

function toOrganization() {
  return null;
}

class AppRouter extends React.Component {
  render() {
    if (this.props.location == "UnloggedRouter") {
      return (
        <Router>
          <nav className="navbar navbar-expand-md navbar-blue">
            <Link className="navbar-brand" to="/">
              Friendeller
            </Link>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul class="nav navbar-nav mr-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/signup/">
                    SIGN UP
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="/organization/"
                    id="OrgRouter"
                    onClick={this.props.handleLocation}
                  >
                    ORGANIZATION
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link active" to="/social/login/">
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/organization/" component={OrgHome} />
          <Route path="/signup/" component={SignUpMaster} />
          <Route path="/social/login/" component={Login} />
        </Router>
      );
    } else {
      return null;
    }
  }
}

export default AppRouter;
