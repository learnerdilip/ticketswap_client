import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogin } from "../../store/user/actions";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLogin(this.state.email, this.state.password);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // console.log("THE LOGIN FORM STATE:", this.state);
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Email(username)
            <input
              input="text"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            Password
            <input
              input="text"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <Link to="/">HOME PAGE</Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("THE State in login form", reduxState);
  return {};
}

export default connect(mapStateToProps, { userLogin })(LoginForm);
