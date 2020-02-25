import React, { Component } from "react";
import { connect } from "react-redux";
import { clickEventUpdate } from "../../store/events/actions";
import { Link } from "react-router-dom";

class Events extends Component {
  handleClick = currentevent => {
    console.log("the event was clicked!", currentevent);
    this.props.clickEventUpdate(currentevent);
  };

  render() {
    const mappedevents = this.props.eventstate.eventlist.map((event, index) => {
      return (
        <div className="homeEvent" key={index}>
          <img height="300px" width="300px" src={event.imageUrl} />
          <Link
            to={`/event/${event.name}`}
            onClick={() => this.handleClick(event)}
          >
            {event.name}
          </Link>
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

export default connect(mapStateToProps, { clickEventUpdate })(Events);
