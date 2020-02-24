import React, { Component } from "react";
import { connect } from "react-redux";
import { sendEvent } from "../../store/events/actions";

class EventsForm extends Component {
  state = {
    title: "",
    description: "",
    imageurl: "",
    start_date: "",
    end_date: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendEvent(this.state);
  };

  render() {
    // console.log("THE STATE IN EVENTS FORM", this.state);
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            EVENT TITLE
            <input
              onChange={event => this.handleChange(event)}
              value={this.state.title}
              type="text"
              placeholder="Event title"
              name="title"
            />
          </label>
          <label>
            EVENT DESCRIPTION
            <textarea
              onChange={event => this.handleChange(event)}
              value={this.state.description}
              placeholder="Event description"
              type="textarea"
              name="description"
            />
          </label>
          <label>
            IMAGE URL
            <input
              onChange={event => this.handleChange(event)}
              value={this.state.imageurl}
              placeholder="Please provide image URL"
              type="text"
              name="imageurl"
            />
          </label>
          <label>
            START DATE
            <input
              onChange={event => this.handleChange(event)}
              value={this.state.start_date}
              type="date"
              placeholder="Start date"
              name="start_date"
            />
          </label>
          <label>
            END DATE
            <input
              onChange={event => this.handleChange(event)}
              value={this.state.end_date}
              type="date"
              placeholder="end date"
              name="end_date"
            />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("REDUX STATE FROM EVENST FORM", reduxState);
  return {
    eventstate: reduxState
  };
}

export default connect(mapStateToProps, { sendEvent })(EventsForm);
