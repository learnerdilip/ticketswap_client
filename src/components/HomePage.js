import React, { Component } from "react";
import EventListContainer from "./events/EventListContainer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";
import { clearuserData } from "../store/user/actions";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Event Ticket Swap
          </Navbar.Brand>
          <div className="navloginsignup">
            <Link to="/login">LOGIN </Link>
            <br />
            <Link to="/signup">SIGNUP </Link>
            <Link to="/" onClick={() => this.props.clearuserData()}>
              LOGOUT
            </Link>
          </div>
        </Navbar>
        <h2 id="websitewelcome">
          WELCOME! YOU CAN CHOOSE AN EVENT TO BUY OR SELL TICKETS
        </h2>
        <br />
        <EventListContainer />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {};
};

export default connect(mapStateToProps, { clearuserData })(HomePage);
