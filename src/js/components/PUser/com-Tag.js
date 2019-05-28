import React, { Component } from "react";

export class Tag extends Component {
  constructor() {
    super();
  }
  render() {
    return <div class="tag">{this.props.title}</div>;
  }
}

export default Tag;
