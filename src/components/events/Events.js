import React, { Component } from "react";
import { connect } from "react-redux";
import { clickEventUpdate } from "../../store/events/actions";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { initalEventData } from "../../InitialEventsData";

class Events extends Component {
  handleClick = currentevent => {
    // console.log("the event was clicked!", currentevent);
    this.props.clickEventUpdate(currentevent);
  };

  render() {
    console.log(this.props.eventstate.eventlist);
    const mappedevents = this.props.eventstate.eventlist.map((event, index) => {
      return (
        <Card className="eventCard" style={{ width: "18rem" }}>
          <Card.Header
            id="cardheader"
            style={{ background: "#6c757d", fontWeight: 700 }}
          >
            {event.name}
          </Card.Header>
          <Card.Img id="cardimage" variant="top" src={event.imageUrl} />
          <Card.Body id="cardbody">
            <Card.Text>{event.description}</Card.Text>
          </Card.Body>
          <Link id="buttoncard" to={`/event/${event.id}`}>
            <Button onClick={() => this.handleClick(event)} variant="dark">
              TICKETS!
            </Button>
          </Link>
        </Card>
      );
    });
    return (
      <div class="card" className="eventCardscontainer">
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
