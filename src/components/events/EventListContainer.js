import React, { Component } from "react";
import Events from "./Events";
import EventsForm from "./EventsForm";
import { connect } from "react-redux";
import { getEventsList } from "../../store/events/actions";

class EventListContainer extends Component {
  componentDidMount() {
    this.props.getEventsList();
  }

  render() {
    return (
      <div>
        <Events className="eventcontainerhome" />}
        <br />
        <EventsForm />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log("THE STATE IN EVENTS FORM", reduxState.events);
  return {
    eventstate: reduxState.events
  };
};

export default connect(mapStateToProps, { getEventsList })(EventListContainer);
