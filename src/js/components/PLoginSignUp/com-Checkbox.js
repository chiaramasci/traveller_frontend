import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    return (
      <div class="checkbox">
        <label>
          <input type="checkbox" value="" />
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default Checkbox;
