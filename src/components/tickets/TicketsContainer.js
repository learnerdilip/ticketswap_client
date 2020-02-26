import React, { Component } from "react";
import TicketCreateForm from "./TicketCreateForm";
import TicketItem from "./TicketItem";
import { getTicketList, setCurrentTicket } from "../../store/tickets/actions";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";

class ticketsContainer extends Component {
  componentDidMount() {
    this.props.getTicketList(this.props.eventstate.currentevent.id);
  }

  setTicketState = ticket => {
    this.props.setCurrentTicket(ticket);
  };

  render() {
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
        <h2>EVENT TICKETS</h2>
        <TicketItem
          handleClick={this.setTicketState}
          data={this.props.ticketstate.ticketList}
        />
        {this.props.userstate.token && <TicketCreateForm />}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    ticketstate: reduxState.tickets,
    eventstate: reduxState.events,
    userstate: reduxState.user
  };
};

export default connect(mapStateToProps, { getTicketList, setCurrentTicket })(
  ticketsContainer
);
