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

  handleSubmit = async event => {
    event.preventDefault();
    console.log(
      "--------tiket creation data-----",
      this.state,
      this.props.eventstate.events.currentevent.id,
      this.props.userstate.token
    );

    const sendTheCreatedTicket = await this.props.sendTicket(
      // the state(local)
      this.state,
      this.props.eventstate.events.currentevent.id,
      this.props.userstate.userid,
      this.props.userstate.token
    );
    this.setState({
      title: "",
      description: "",
      price: 0
    });
    console.log("----the ticket STATE----", this.props.ticketstate.ticket);
    // this.props.sendTicketForRiskCalc(this.props.ticketstate.ticket);
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
          <Button type="submit">Create Ticket</Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("REDUX STATE FROM EVENST FORM", reduxState);
  return {
    eventstate: reduxState,
    userstate: reduxState.user,
    ticketstate: reduxState.tickets
  };
}

export default connect(mapStateToProps, { sendTicket })(TicketCreateForm);
