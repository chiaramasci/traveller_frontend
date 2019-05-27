import React, { Component } from "react";
import { connect } from "react-redux";
import { getListChats } from "../../actions/cMessagePeople";

import ChatItem from "./com-ChatItem";

export class ListChatsConnected extends Component {
  constructor() {
    super();

    this.state = {
      chats: [
        {
          name: "Chiara"
        }
      ]
    };
  }
  componentDidMount() {
    this.props.getListChats();
  }
  render() {
    return (
      <div class="container">
        <link rel="stylesheet" href="/css/chat.css" />
        <div>
          <ul>
            {this.state.chats.map(el => (
              <ChatItem key={el.id} title={el.name} />
            ))}
          </ul>
        </div>
        <button>add chat</button>
      </div>
    );
  }
}

//TODO instead of this.state.chats -> this.props.chats
//TODO check combineReducers state

function mapStateToProps(state) {
  return {
    chats: state.listConversations
  };
}
export default connect(
  mapStateToProps,
  { getListChats }
)(ListChatsConnected);
