import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { changeEditState } from "../../store/tickets/actions";

class TicketItem extends Component {
  state = {
    title: "",
    description: "",
    price: 0
  };

  handleEdit = async ticket => {
    const localStateToTicket = await this.setState({
      title: ticket.title,
      description: ticket.description,
      price: ticket.price
    });
    // console.log("the local state", this.state);
    this.props.changeEditState();
  };

  render() {
    // console.log("props for individual tickets", this.props.data);
    if (!this.props.data) return <div>Loading...</div>;
    return (
      <div className="tickettable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Check Ticket</th>
              <th>Ticket Risk</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(ticket => {
              return (
                <tr>
                  <td>{ticket.title}</td>
                  <td>{ticket.price}</td>
                  <td>{ticket.description}</td>
                  <Link
                    onClick={() => this.props.handleClick(ticket)}
                    to={`/event/ticket/${ticket.id}`}
                  >
                    {ticket.id}
                  </Link>
                  <td
                    className="riskyparam"
                    style={
                      (ticket.risk > 75 && { color: "red" }) ||
                      (ticket.risk < 30 && { color: "green" }) ||
                      (ticket.risk < 75 &&
                        ticket.risk > 30 && { color: "orange" })
                    }
                  >
                    {ticket.risk}
                  </td>
                  <Button
                    onClick={() => {
                      if (ticket.userId === this.props.userState.userid) {
                        this.handleEdit(ticket);
                      } else {
                        console.log("ticket created by another user!!");
                      }
                    }}
                  >
                    EDIT
                  </Button>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userState: reduxState.user,
    ticketState: reduxState.tickets
  };
};

export default connect(mapStateToProps, { changeEditState })(TicketItem);
