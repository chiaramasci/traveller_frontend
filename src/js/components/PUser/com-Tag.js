import React, { Component } from "react";

export class Tag extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li>
        <h4>{this.props.title}</h4>
      </li>
    );
  }
}

export default Tag;
