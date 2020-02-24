import React, { Component } from "react";
import { connect } from "react-redux";
import { sendEvent } from "../../store/events/actions";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

class EventsForm extends Component {
  state = {
    title: "",
    description: "",
    imageurl: "",
    start_date: "",
    end_date: ""
  };

  componentDidMount() {}

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
    return (
      <div className="eventhomeform">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label class="label">
            EVENT TITLE
            <input
              class="input"
              onChange={event => this.handleChange(event)}
              value={this.state.title}
              type="text"
              placeholder="Event title"
              name="title"
            />
          </label>
          <br />
          <label class="label">
            EVENT DESCRIPTION
            <textarea
              class="textarea"
              onChange={event => this.handleChange(event)}
              value={this.state.description}
              placeholder="Event description"
              type="textarea"
              name="description"
            />
          </label>
          <br />
          <label class="label">
            IMAGE URL
            <input
              class="input"
              onChange={event => this.handleChange(event)}
              value={this.state.imageurl}
              placeholder="Please provide image URL"
              type="text"
              name="imageurl"
            />
          </label>
          <br />
          <label class="label">
            START DATE
            <input
              class="date"
              onChange={event => this.handleChange(event)}
              value={this.state.start_date}
              type="date"
              placeholder="Start date"
              name="start_date"
            />
          </label>
          <label class="label">
            END DATE
            <input
              class="date"
              onChange={event => this.handleChange(event)}
              value={this.state.end_date}
              type="date"
              placeholder="end date"
              name="end_date"
            />
          </label>
          <Button color="primary" type="submit">
            SUBMIT
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("REDUX STATE FROM EVENST FORM", reduxState);
  return {
    eventstate: reduxState
  };
}

export default connect(mapStateToProps, { sendEvent })(EventsForm);
