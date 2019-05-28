import React, { Component } from "react";
import Tag from "./com-Tag";

export class TagsFascia extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="tagfascia">
        {/* title */}
        <h3>{this.props.title}</h3>
        {/* tags */}
        <div>
          {this.props.tags.map(el => (
            <Tag key={el.id} title={el} />
          ))}
        </div>
      </div>
    );
  }
}

export default TagsFascia;
