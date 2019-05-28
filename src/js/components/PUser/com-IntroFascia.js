import React, { Component } from "react";

export class IntroFascia extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <div className="float-left">
            <h1>{this.props.name + " " + this.props.surname}</h1>
            <h2>{this.props.nationality}</h2>
          </div>

          <button className="float-right">MESSAGE</button>
        </div>
        <p style={{ clear: "both" }}>{this.props.bio}</p>
      </div>
    );
  }
}

export default IntroFascia;
