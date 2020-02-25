import React, { Component } from "react";
import TicketCreateForm from "./TicketCreateForm";
import TicketItem from "./TicketItem";
import { getTicketList } from "../../store/tickets/actions";
import { connect } from "react-redux";

class ticketsContainer extends Component {
  componentDidMount() {
    this.props.getTicketList(this.props.eventstate.currentevent.id);
  }

  render() {
    return (
      <div>
        <h2>EVENT TICKETS</h2>
        <TicketItem data={this.props.ticketstate.ticketList} />
        <TicketCreateForm />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    ticketstate: reduxState.tickets,
    eventstate: reduxState.events
  };
};

export default connect(mapStateToProps, { getTicketList })(ticketsContainer);
