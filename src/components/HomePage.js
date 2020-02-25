import React, { Component } from "react";
import EventListContainer from "./events/EventListContainer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Event Ticket Swap
          </Navbar.Brand>
        </Navbar>
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
