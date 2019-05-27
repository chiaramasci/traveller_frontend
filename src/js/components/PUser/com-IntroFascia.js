import React, { Component } from "react";

export class IntroFascia extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.name + " " + this.props.surname}</h1>
          <h2>{this.props.nationality}</h2>
          <button>MESSAGE</button>
        </div>
        <p>{this.props.bio}</p>
      </div>
    );
  }
}

export default IntroFascia;
