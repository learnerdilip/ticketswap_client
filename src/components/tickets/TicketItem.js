import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { changeEditState } from "../../store/tickets/actions";
import EditForm from "./EditForm";

class TicketItem extends Component {
  state = {
    title: "",
    description: "",
    price: null
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

  formEditHandle = async event => {
    // console.log(event.target.value);
  };

  render() {
    let riskyparam = "red-class";
    console.log("props for individual tickets", this.props.data);
    if (!this.props.data)
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );

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
                  <Link
                    id="ticketinlist"
                    onClick={() => this.props.handleClick(ticket)}
                    to={`/event/ticket/${ticket.id}`}
                  >
                    <td>{ticket.title}</td>
                  </Link>
                  <td>{ticket.price}</td>
                  <td>{ticket.description}</td>
                  <td>{ticket.id}</td>

                  <td
                    className="riskyparam"
                    style={
                      (ticket.risk >= 75 && { color: "red" }) ||
                      (ticket.risk <= 30 && { color: "green" }) ||
                      (ticket.risk < 75 &&
                        ticket.risk > 30 && { color: "orange" })
                    }
                  >
                    {ticket.risk}%
                  </td>
                  {/* if the user is correct show the edit button */}
                  {ticket.userId === this.props.userState.userid && (
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
                  )}
                </tr>
                //
              );
            })}
          </tbody>
        </Table>
        {this.props.ticketState.editMode && (
          <EditForm ticketData={this.state} />
        )}
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
