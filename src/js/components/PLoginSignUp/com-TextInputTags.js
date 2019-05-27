import React, { Component } from "react";

class TextInputTags extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputField: "",
      inputsInserted: []
    };

    this.keyPress = this.keyPress.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      const list = this.state.inputsInserted.concat(this.state.inputField);
      this.setState({ inputsInserted: list });
      this.setState({ inputField: "" });
    } else {
      this.setState({ inputField: event.target.value });
    }
  }

  keyPress(e) {
    if (e.keyCode == 13) {
      const list = this.state.inputsInserted.concat(this.state.inputField);
      this.setState({ inputsInserted: list });
      this.setState({ inputField: "" });
    }
  }

  removeInput(event) {
    console.log(event.target.id);
    const list = this.state.inputsInserted.filter(el => el !== event.target.id);
    console.log("filtered" + list);
    this.setState({ inputsInserted: list });
    console.log(this.state.inputsInserted);
  }

  render() {
    return (
      <div class="input-group mb-3">
        <label data-icon="u">
          <input
            type="text"
            className="form-control"
            id="languages"
            value={this.state.inputField}
            onChange={this.handleChange}
            onKeyDown={this.keyPress}
            placeholder={this.props.placeholder}
          />
        </label>

        <div>
          {this.state.inputsInserted.map((item, index) => (
            <div key={index}>
              {item}
              <i id={item} className="fa fa-times" onClick={this.removeInput} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TextInputTags;
