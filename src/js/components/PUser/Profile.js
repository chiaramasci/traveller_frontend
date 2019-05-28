import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../actions/cUser";

import ImageHeader from "./com-ImageHeader";
import IntroFascia from "./com-IntroFascia";
import TagsFascia from "./com-TagsFascia";

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: user_id => dispatch(getUserInfo(user_id))
  };
}

const mapStateToProps = state => {
  return {
    user_id: state.CUser.user_id,
    userInfo: state.CUser.userInfo
  };
};

export class ProfileConnected extends Component {
  constructor() {
    super();

    this.state = {
      name: "Chiara",
      surname: "Masci",
      url_picture: "img/lala.png",
      nationality: "Italian",
      bio: "awesome bio",
      languages: ["Italian", "English", "German"],
      interests: ["electronics", "climbing"]
    };
  }
  componentDidMount() {
    this.props.getUserInfo(this.props.user_id);
  }
  render() {
    return (
      <div id="profile" className="container">
        {/* Fascia immagine */}
        <ImageHeader img={this.props.userInfo.url_picture} />
        {/* Intro fascia */}
        <IntroFascia
          name={this.props.userInfo.name}
          surname={this.props.userInfo.surname}
          nationality={this.props.userInfo.nationality}
          bio={this.props.userInfo.bio}
        />
        {/* Fascia languages */}
        <TagsFascia
          title="LANGUAGES"
          tags={this.props.userInfo.languages.split(",")}
          className="clearfix"
        />
        {/* Fascia Interessi */}
        <TagsFascia
          title="INTERESTS"
          tags={this.props.userInfo.interests.split(",")}
          className="clearfix"
        />
      </div>
    );
  }
}

//TODO instead of this.state.name -> this.props.userInfo.name
//TODO check combineReducers state

// function mapStateToProps(state) {
//   return {
//     user: state.userInfo
//   };
// }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileConnected);
