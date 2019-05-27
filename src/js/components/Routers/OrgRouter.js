import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../Home";
import OrgFlights from "../POrganization/OrgFlights";
import OrgHome from "../POrganization/OrgHome";
import OrgProps from "../POrganization/OrgProps";
import OrgSleep from "../POrganization/OrgSleep";
import Login from "../PLoginSignUp/Login";

class AppRouter extends React.Component {
  render() {
    if (this.props.location == "OrgRouter") {
      return (
        <Router>
          <div>
            <nav class="navbar navbar-expand-md navbar-light">
              <Link
                class="navbar-brand"
                to="/"
                id="UnloggedRouter"
                onClick={this.props.handleLocation}
              >
                Friendeller
              </Link>
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon" />
              </button>
              <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/organization/flights/">
                      FLIGHTS
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/organization/sleep/">
                      SLEEP
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/organization/props/">
                      PROPS
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/organization/" component={OrgHome} />
            <Route path="/organization/flights/" component={OrgFlights} />
            <Route path="/organization/sleep/" component={OrgSleep} />
            <Route path="/organization/props/" component={OrgProps} />
            <Route path="/organization/login/" component={Login} />
          </div>
        </Router>
      );
    } else {
      return null;
    }
  }
}

export default AppRouter;
