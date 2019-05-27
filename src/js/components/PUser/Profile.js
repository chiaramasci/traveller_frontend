import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../actions/cUser";

import ImageHeader from "./com-ImageHeader";
import IntroFascia from "./com-IntroFascia";
import TagsFascia from "./com-TagsFascia";

export class ProfileConnected extends Component {
  constructor() {
    super();

    this.state = {
      name: "Chiara",
      surname: "Masci",
      url_picture: "lala.png",
      nationality: "Italian",
      bio: "awesome bio",
      languages: ["Italian", "English", "German"],
      interests: ["electronics", "climbing"]
    };
  }
  componentDidMount() {
    this.props.getUserInfo();
  }
  render() {
    return (
      <div>
        {/* Fascia immagine */}
        <ImageHeader img={this.state.url_picture} />
        {/* Intro fascia */}
        <IntroFascia
          name={this.state.name}
          surname={this.state.surname}
          nationality={this.state.nationality}
          bio={this.state.bio}
        />
        {/* Fascia languages */}
        <TagsFascia title="LANGUAGES" tags={this.state.languages} />
        {/* Fascia Interessi */}
        <TagsFascia title="INTERESTS" tags={this.state.interests} />
      </div>
    );
  }
}

//TODO instead of this.state.name -> this.props.userInfo.name
//TODO check combineReducers state

function mapStateToProps(state) {
  return {
    user: state.userInfo
  };
}
export default connect(
  mapStateToProps,
  { getUserInfo }
)(ProfileConnected);
