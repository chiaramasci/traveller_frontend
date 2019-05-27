import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li>
        <p>{this.props.text}</p>
      </li>
    );
  }
}

export default Message;
