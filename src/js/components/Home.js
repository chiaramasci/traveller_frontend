import React, { Component } from "react";
import styled from "styled-components";
import OrgHome from "../components/POrganization/OrgHome";
import { Link } from "react-router-dom";

export class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Container>
        <div id="home">
          {/* <h1> Friendler </h1> */}
          <div id="cf">
            <img class="form-control-plaintext" src="img/londra.jpg" />
            <img class="form-control-plaintext" src="img/francia.jpeg" />
            <img class="form-control-plaintext" src="img/madrid.jpeg" />
            <img class="form-control-plaintext" src="img/sidneyy.jpeg" />
          </div>

          <p id="paragraph">
            <b>
              {" "}
              Welcome to Friendler!{" "}
              <span id="p2">
                <br /> Are you looking for adventure?
              </span>
            </b>{" "}
          </p>
          <button type="button" id="OrganizeBtn" class="form-control">
            <Link to="/organization/"> ORGANIZATION </Link>
          </button>
          <button type="button" id="SocialBtn" class="form-control">
            {" "}
            <Link to="/social/login"> SOCIAL </Link>
          </button>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  /*CONTAINER*/

  .container {
    position: relative;
    z-index: 1;
    padding: 0px !important;
    top: 10px;

    & img {
      overflow: auto;
    }
  }

  /*TEXT*/

  #socialIconP {
    color: white;
    text-decoration: none;
  }
  .paragrafo b {
    color: white;
    font-weight: bold;
    padding-left: 100px;
    font-family: "Times", serif;
    font-weight: bold;
    font-size: 40px;
    font-style: italic;
  }

  .testo {
    font-family: "Verdana", sans-serif;
    font-weight: bold;
    font-size: 42px;
    top: 8px;
    left: 16px;
    color: white;
    position: absolute;
  }

  .paragrafo {
    font-family: "Verdana", sans-serif;
    font-weight: normal;
    font-size: 20px;
  }
`;

export default Home;
