import React, { Component } from "react";
import { connect } from "react-redux";
import { sendEvent } from "../../store/events/actions";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

class EventsForm extends Component {
  state = {
    title: "",
    description: "",
    imageurl: "",
    start_date: "",
    end_date: ""
  };

  componentDidMount() {}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendEvent(this.state, this.props.userstate.token);
    this.setState({
      title: "",
      description: "",
      imageurl: "",
      start_date: "",
      end_date: ""
    });
  };

  render() {
    return (
      <div className="eventform">
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="text">
            <Form.Label>EVENT TITLE</Form.Label>
            <Form.Control
              onChange={event => this.handleChange(event)}
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Enter Title"
            />
          </Form.Group>
          <br />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>EVENT DESCRIPTION</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={event => this.handleChange(event)}
              value={this.state.description}
              type="textarea"
              name="description"
              placeholder="Enter Description"
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>IMAGE URL</Form.Label>
            <Form.Control
              onChange={event => this.handleChange(event)}
              value={this.state.imageurl}
              type="text"
              name="imageurl"
              placeholder="Please provide image URL"
            />
          </Form.Group>
          <br />
          <label>
            START DATE
            <input
              onChange={event => this.handleChange(event)}
              value={this.state.start_date}
              type="date"
              placeholder="Start date"
              name="start_date"
            />
          </label>
          <label>
            END DATE
            <input
              onChange={event => this.handleChange(event)}
              value={this.state.end_date}
              type="date"
              placeholder="end date"
              name="end_date"
            />
          </label>
          <br />
          <Button variant="dark" type="submit">
            SUBMIT
          </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("REDUX STATE FROM EVENST FORM", reduxState);
  return {
    eventstate: reduxState,
    userstate: reduxState.user
  };
}

export default connect(mapStateToProps, { sendEvent })(EventsForm);
