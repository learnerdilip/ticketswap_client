import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import LoginForm from "./components/user/LoginForm";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/user/SignupForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ticketsContainer from "./components/tickets/TicketsContainer";
import TIcketCommentContainer from "./components/comments/TIcketCommentContainer";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/event" component={ticketsContainer} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/event/:event" component={ticketsContainer} />
        <Route
          exact
          path="/event/ticket/:ticket"
          component={TIcketCommentContainer}
        />
      </Switch>
    </Provider>
  );
}

export default App;
