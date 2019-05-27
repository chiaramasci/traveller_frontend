// src/js/components/Form.jsx
import React, { Component } from "react";
import styled from "styled-components";

class OrganizationHome extends Component {
  render() {
    return (
      <div id="orghome">
        {/* <link rel="stylesheet" href="/css/orghome.css" /> */}
        <div className="container">
          <img src="/img/backorg.jpeg" width="100%" height="100%" />
          <div className="testo">
            Organize your trip with Friendler!
            <div className="paragrafo">
              <p>
                {" "}
                This website allows you to fully organize your trip by linking
                you <br /> the best websites for flights, accommodations and
                props in general. <br />
                Are you eager to travel with other people or meet new people
                while traveling? <br />
                Then sign in by clicking on the social Icon!{" "}
                <a href="#">
                  <i className="fa fa-comment" id="socialIconP" />
                </a>{" "}
                <br />
                There you will be able to find new friends based on your
                interests and <br /> on what you want to do while you're abroad!{" "}
                <br />
                <br />
                <br />
                <br />
                <b>WORK, SAVE, TRAVEL, REPEAT </b>
              </p>
            </div>
          </div>
        </div>
      </div>
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

export default OrganizationHome;
