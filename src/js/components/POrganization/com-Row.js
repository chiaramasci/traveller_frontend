import React, { Component } from "react";

class Row extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <div class="row">
          <div class="column">
            <img
              src={this.props.img}
              height={this.props.img_height}
              width={this.props.img_width}
            />
          </div>
          <div class="column">
            {" "}
            <a href={this.props.link}>
              <h2>
                <b> {this.props.title} </b>
              </h2>
            </a>
          </div>
          <br />
          <br />
          <br />
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Row;
