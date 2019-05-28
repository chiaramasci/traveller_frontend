import React, { Component } from "react";

export class ImageHeader extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <img src={this.props.img} />
      </div>
    );
  }
}

export default ImageHeader;
