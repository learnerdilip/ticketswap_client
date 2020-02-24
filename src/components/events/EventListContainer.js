import React, { Component } from "react";
import Events from "./Events";
import EventsForm from "./EventsForm";

export default class EventListContainer extends Component {
  render() {
    return (
      <div>
        <Events />
        <br />
        <EventsForm />
      </div>
    );
  }
}

// * a name
// * a description
// * a picture or logo
// * a start and end date (could be the same)
