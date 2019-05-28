// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import ElSearchPeople from "./com-ElSearchPeople";
import { searchPeople } from "../../actions/cSearchPeople";

function mapDispatchToProps(dispatch) {
  return {
    searchPeople: userInfo => dispatch(searchPeople(userInfo))
  };
}

const mapStateToProps = state => {
  return {
    user_id: state.CUser.user_id,
    people_list: state.CSearchPeople.people_list
  };
};

class ConnectedSearchPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: props.user_id,
      lat: 0,
      lon: 0
    };

    this.props.searchPeople(this.state);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div class="container">
        <div id="searchpeople">
          <input
            type="text"
            id="myInput"
            placeholder="Search people.."
            title="Type in a name"
          />

          <h6>
            <b>SUGGESTED PEOPLE</b>
          </h6>
          <div id="myUL">
            {this.props.people_list.map(person => (
              <ElSearchPeople
                key={person.id}
                name={person.name}
                person_id={person.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

//null as no mapStateToProps is present
const SearchPeople = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedSearchPeople);
export default SearchPeople;
