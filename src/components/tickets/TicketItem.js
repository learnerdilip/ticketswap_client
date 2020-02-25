import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class TicketItem extends Component {
  render() {
    // console.log("props for individual tickets", this.props.data);
    return (
      <div className="tickettable">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(ticket => {
              return (
                <tr>
                  <td>{ticket.title}</td>
                  <td>{ticket.price}</td>
                  <td>{ticket.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}