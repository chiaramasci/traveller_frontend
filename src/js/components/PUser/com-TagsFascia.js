import React, { Component } from "react";
import Tag from "./com-Tag";

export class TagsFascia extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {/* title */}
        <h3>{this.props.title}</h3>
        {/* tags */}
        {this.props.tags.map(el => (
          <Tag key={el.id} title={el} />
        ))}
      </div>
    );
  }
}

export default TagsFascia;
