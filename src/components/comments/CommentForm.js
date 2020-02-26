import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { sendComment } from "../../store/comments/action";

class CommentForm extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendComment({
      userid: this.props.userstate.userid,
      text: this.state.comment,
      ticketid: this.props.ticketstate.ticket.id
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={event => this.handleChange(event)}
              value={this.state.description}
              type="textarea"
              name="comment"
              placeholder="Enter the Comment"
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
    ticketstate: reduxState.tickets,
    userstate: reduxState.user
  };
};

export default connect(mapStateToProps, { sendComment })(CommentForm);
