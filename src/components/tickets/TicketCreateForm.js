import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { sendTicket } from "../../store/tickets/actions";

class TicketCreateForm extends Component {
  state = {
    title: "",
    description: "",
    price: 0
  };

  componentDidMount() {}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendTicket(
      this.state,
      this.props.eventstate.events.currentevent.id
    );
    this.setState({
      title: "",
      description: "",
      price: 0
    });
  };

  render() {
    return (
      <div className="eventform">
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="text">
            <Form.Label>TICKET TITLE</Form.Label>
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
            <Form.Label>TICKET DESCRIPTION</Form.Label>
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
            <Form.Label>PRICE</Form.Label>
            <Form.Control
              onChange={event => this.handleChange(event)}
              value={this.state.imageurl}
              type="text"
              name="price"
              placeholder="Price for your ticket"
            />
          </Form.Group>
          <br />

          <br />
          <Button type="submit">SUBMIT</Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("REDUX STATE FROM EVENST FORM", reduxState);
  return {
    eventstate: reduxState
  };
}

export default connect(mapStateToProps, { sendTicket })(TicketCreateForm);
