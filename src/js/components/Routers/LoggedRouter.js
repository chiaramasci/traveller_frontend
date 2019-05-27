import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Logout from "../PLoginSignUp/Logout";
import ListChats from "../PMessagePeople/ListChats";
import SearchPeople from "../PSearchPeople/SearchPeople";
import Profile from "../PUser/Profile";
import Home from "../Home";
import OrgHome from "../POrganization/OrgHome";

class AppRouter extends React.Component {
  render() {
    if (this.props.location == "LoggedRouter") {
      return (
        <Router>
          <nav class="navbar navbar-expand-md navbar-light">
            <Link class="navbar-brand" to="/">
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
                  <Link class="nav-link" to="/social/myprofile/">
                    MY PROFILE
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/social/find/">
                    FIND PEOPLE
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/social/messages/">
                    MESSAGES
                  </Link>
                </li>
                <li>
                  <Logout />
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/organization/" component={OrgHome} />
          <Route path="/social/myprofile/" component={Profile} />
          <Route path="/social/find/" component={SearchPeople} />
          <Route path="/social/messages/" component={ListChats} />
        </Router>
      );
    } else {
      return null;
    }
  }
}

export default AppRouter;
