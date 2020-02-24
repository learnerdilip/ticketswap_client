import React, { Component } from "react";
import EventListContainer from "./events/EventListContainer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>The home page</h2>
        <EventListContainer />
        <Link to="/login">TO LOGIN PAGE</Link>
        <br />
        <Link to="/signup">TO SIGN UP PAGE</Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {};
};

export default connect(mapStateToProps)(HomePage);
