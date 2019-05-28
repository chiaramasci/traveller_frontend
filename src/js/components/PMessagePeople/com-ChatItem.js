import React, { Component } from "react";

export class ChatItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="chat">
        <i class="fa fa-address-book"> {this.props.title}</i>
      </div>
    );
  }
}

export default ChatItem;
