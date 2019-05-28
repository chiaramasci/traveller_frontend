import React from "react";

//TODO: receive user_id and add link
class ElSearchPeople extends React.Component {
  render() {
    return (
      <div class="elements">
        <a href="#">{this.props.name}</a>
      </div>
    );
  }
}

export default ElSearchPeople;
