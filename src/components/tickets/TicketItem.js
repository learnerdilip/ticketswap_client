import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class TicketItem extends Component {
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
                      (ticket.risk > 50 && { color: "red" }) ||
                      (ticket.risk < 50 && { color: "green" })
                    }
                  >
                    {ticket.risk}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
