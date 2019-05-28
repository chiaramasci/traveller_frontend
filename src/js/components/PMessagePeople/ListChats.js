import React, { Component } from "react";
import { connect } from "react-redux";
import { getListChats } from "../../actions/cMessagePeople";

import ChatItem from "./com-ChatItem";

function mapDispatchToProps(dispatch) {
  return {
    getListChats: user_id => dispatch(getListChats(user_id))
  };
}

const mapStateToProps = state => {
  return {
    user_id: state.CUser.user_id,
    chats: state.CMessagePeople.listConversations
  };
};

export class ListChatsConnected extends Component {
  constructor(props) {
    super(props);
    props.getListChats(props.user_id);
    console.log(props.chats);
  }

  render() {
    return (
      <div id="listchats">
        <div class="container">
          <div>
            {this.props.chats.map(el => (
              <ChatItem key={el.id} title={el.name} />
            ))}
          </div>
          <button>add chat</button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListChatsConnected);
