import React, { Component } from "react";
import { connect } from "react-redux";
import { getChatMessages, addMessage } from "../actions/cMessagePeople";

import Message from "./com-Message";

export class ListChatsConnected extends Component {
  constructor() {
    super();

    this.setState({
      newmessage: "",
      messages: [
        {
          text: "Chiara",
          url_resource: ""
        }
      ]
    });
  }
  componentDidMount() {
    this.props.getChatMessages();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log({ title, id });
    this.props.addMessage({ title, id });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { newmessage } = this.state.newmessage;
    return (
      <div>
        {/* messages list */}
        <div>
          <ul>
            {this.state.messages.map(el => (
              <Message key={el.id} text={el.text} />
            ))}
          </ul>
          {/* input add message */}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="newmessage"
            value={newmessage}
            onChange={this.handleChange}
          />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

//TODO instead of this.state.messages -> this.props.messages
//TODO check combineReducers state

function mapStateToProps(state) {
  return {
    messages: state.listMessages
  };
}
export default connect(
  mapStateToProps,
  { getChatMessages }
)(ListChatsConnected);
