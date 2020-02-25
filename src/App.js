import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import LoginForm from "./components/user/LoginForm";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import SignupForm from "./components/user/SignupForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </Provider>
  );
}

export default App;
