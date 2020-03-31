import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogin } from "../../store/user/actions";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLogin(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // console.log("THE LOGIN FORM STATE:", this.state);
    if (this.props.userstate.token) this.props.history.push("/");

    return (
      <div className="loginsiunupForm">
        <h3>Please Login here</h3>
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
          <h6>Not a registered user? Go to</h6>
          <Link to="/signup">SIGN UP PAGE</Link>
          <Link to="/">HOME PAGE</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("THE State in login form", reduxState);
  return {
    userstate: reduxState.user
  };
}

export default connect(mapStateToProps, { userLogin })(LoginForm);
