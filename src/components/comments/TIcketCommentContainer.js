import React, { Component } from "react";
import { connect } from "react-redux";
import CommentForm from "./CommentForm";
import { getComments } from "../../store/comments/action";
import { Card } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

class TIcketCommentContainer extends Component {
  componentDidMount() {
    console.log(";;;;;;;;;;;;;;;rcomp did mount");
    this.props.getComments(this.props.ticketState.ticket.id);
  }

  render() {
    console.log(";;;;;;;;;;;;;;;render");

    if (!this.props.commentstate.commentList) return <div>Loading...</div>;
    const allcomments = this.props.commentstate.commentList.map(comment => {
      return (
        <Card>
          <Card.Body>
            <Card.Title>{comment.text}</Card.Title>
            <Card.Text>USER ID: {comment.userId}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
    const {
      id,
      price,
      title,
      imageurl,
      description
    } = this.props.ticketState.ticket;

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Event Ticket Swap
          </Navbar.Brand>
          <div className="navloginsignup"></div>
        </Navbar>
        <h2>The Ticket Details</h2>
        <div className="the Ticket">
          <h2>{title}</h2>
          <img src="https://www.dansschool-wesseling.nl/uploads/Image/tickets.png" />
          <p>{description}</p>
        </div>
        {allcomments}
        {this.props.userstate.token && <CommentForm />}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    ticketState: reduxState.tickets,
    commentstate: reduxState.comments,
    userstate: reduxState.user
  };
};

export default connect(mapStateToProps, { getComments })(
  TIcketCommentContainer
);
