import React, { Component } from "react";
import { connect } from "react-redux";
import "react-bulma-components/dist/react-bulma-components.min.css";

class Events extends Component {
  render() {
    const mappedevents = this.props.eventstate.eventlist.map((event, index) => {
      return (
        <div className="homeEvent" key={index}>
          <p class="title is-4">{event.name}</p>
          <img class="card-image" src={event.imageUrl} />
        </div>
      );
    });
    return (
      <div class="card" className="eventCards">
        {mappedevents}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    eventstate: reduxState.events
  };
};

export default connect(mapStateToProps)(Events);
