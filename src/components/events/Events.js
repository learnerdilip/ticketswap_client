import React, { Component } from "react";
import { connect } from "react-redux";

class Events extends Component {
  handleClick = eventName => {
    console.log("the event was clicked!", eventName);
  };

  render() {
    const mappedevents = this.props.eventstate.eventlist.map((event, index) => {
      return (
        <div className="homeEvent" key={index}>
          <img height="300px" width="300px" src={event.imageUrl} />
          <p onClick={() => this.handleClick(event.name)}>{event.name}</p>
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
