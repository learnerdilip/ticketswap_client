import React, { Component } from "react";
import { connect } from "react-redux";
import { sendEditTicket } from "../../store/tickets/actions";

class EditForm extends Component {
  state = {
    title: this.props.ticketData.title,
    description: this.props.ticketData.description,
    price: this.props.ticketData.price
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendEditTicket(this.props.ticketState.ticket, this.state);
  };

  handleChange = async event => {
    const changeState = await this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(
      "-----the local state---&& global ticket State----",
      this.state,
      "GS:",
      this.props.ticketState
    );
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            placeholder="price"
            name="price"
            value={this.state.price}
            onChange={e => this.handleChange(e)}
          />
          <button type="submit">SAVE</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    ticketState: reduxState.tickets
  };
};

export default connect(mapStateToProps, { sendEditTicket })(EditForm);
