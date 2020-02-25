import React, { Component } from "react";
import { connect } from "react-redux";
import { clickEventUpdate } from "../../store/events/actions";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Events extends Component {
  handleClick = currentevent => {
    // console.log("the event was clicked!", currentevent);
    this.props.clickEventUpdate(currentevent);
  };

  render() {
    const mappedevents = this.props.eventstate.eventlist.map((event, index) => {
      return (
        <Card className="eventCard" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={event.imageUrl} />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Link to={`/event/${event.id}`}>
              <Button onClick={() => this.handleClick(event)} variant="dark">
                TICKETS!
              </Button>
            </Link>
          </Card.Body>
        </Card>
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
