import React, { Component } from "react";
import { connect } from "react-redux";

import { userSignup, resetsignup } from "../../store/user/actions";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

class SignupForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    await this.props.userSignup(this.state.email, this.state.password);

    this.setState({
      email: "",
      password: ""
    });
    // this.props.resetsignup();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.userstate.userCreated)
      return (
        <div>
          <h3>Thank you for signing Up! Go to Login page now</h3>
          <Link to="/login">LOGIN PAGE</Link>
        </div>
      );
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
        <div className="formundertext">
          <h6>Now go to Login page to sign in to website</h6>
          <Link to="/login">LOGIN PAGE</Link>

          <Link to="/">HOME PAGE</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    userstate: reduxState.user
  };
}

export default connect(mapStateToProps, { userSignup, resetsignup })(
  SignupForm
);
