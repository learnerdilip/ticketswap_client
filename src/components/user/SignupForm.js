import React, { Component } from "react";
import { connect } from "react-redux";

import { userSignup } from "../../store/user/actions";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

class SignupForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userSignup(this.state.email, this.state.password);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // console.log("THE LOGIN FORM STATE:", this.state);
    return (
      <div className="loginsiunupForm">
        <h3>Please Signup here</h3>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Label>Email(username)</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br></br>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        <h6>Now go to Login page to sign in to website</h6>
        <Link to="/login">LOGIN PAGE</Link>
        <br />
        <Link to="/">HOME PAGE</Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps, { userSignup })(SignupForm);
