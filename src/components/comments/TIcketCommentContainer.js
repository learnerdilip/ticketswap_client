import React, { Component } from "react";
import { connect } from "react-redux";
import CommentForm from "./CommentForm";
// import { Image } from "react-bootstrap";

class TIcketCommentContainer extends Component {
  componentDidMount() {}

  render() {
    // console.log("the ticket from redux state", this.props.ticketState.ticket);
    const {
      id,
      price,
      title,
      imageurl,
      description
    } = this.props.ticketState.ticket;

    return (
      <div>
        <h2>The Ticket Details</h2>
        <h2>{title}</h2>
        <img src={imageurl}></img>
        <p>{description}</p>
        <CommentForm />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    ticketState: reduxState.tickets
  };
};

export default connect(mapStateToProps, {})(TIcketCommentContainer);
