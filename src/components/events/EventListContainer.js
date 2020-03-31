import React, { Component } from "react";
import Events from "./Events";
import EventsForm from "./EventsForm";
import { connect } from "react-redux";
import { getEventsList } from "../../store/events/actions";
import { Button } from "react-bootstrap";

class EventListContainer extends Component {
  state = {
    offset: 0
  };
  componentDidMount() {
    this.props.getEventsList(9, this.state.offset);
  }
  changePage = async () => {
    console.log("offsetting");

    const changestate = await this.setState({
      offset: this.state.offset + 9
    });
    this.props.getEventsList(9, this.state.offset);
  };

  render() {
    console.log("the local state in list cotainer", this.state);

    return (
      <div>
        <Events className="eventcontainerhome" />
        <br />
        <Button variant="dark" onClick={this.changePage}>
          NEXT PAGE >
        </Button>
        <hr />
        <h2>CREATE AN EVENT</h2>
        <p style={{ textAlign: "center" }}>
          <sub>Only available when signed in!</sub>{" "}
        </p>
        {this.props.userstate.token && <EventsForm />}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  // console.log("THE STATE IN EVENTS FORM", reduxState.events);
  return {
    eventstate: reduxState.events,
    userstate: reduxState.user
  };
};

export default connect(mapStateToProps, { getEventsList })(EventListContainer);
