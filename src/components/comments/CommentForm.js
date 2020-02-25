import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";

class CommentForm extends Component {
  state = {
    author: "",
    comment: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.props.sendEvent(this.state);
  };

  render() {
    return (
      <div>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="text">
            <Form.Label>EVENT TITLE</Form.Label>
            <Form.Control
              onChange={event => this.handleChange(event)}
              value={this.state.title}
              type="text"
              name="author"
              placeholder="Enter author (your) name"
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
              name="Comment"
              placeholder="Enter Description"
            />
          </Form.Group>
          <Button type="submit">SUBMIT</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    ticketstate: reduxState.tickets
  };
};

export default connect(mapStateToProps)(CommentForm);
