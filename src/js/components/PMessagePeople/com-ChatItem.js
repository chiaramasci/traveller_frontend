import React, { Component } from "react";

export class ChatItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li class="chat">
        <i class="fa fa-address-book"> {this.props.title}</i>
      </li>
    );
  }
}

export default ChatItem;
