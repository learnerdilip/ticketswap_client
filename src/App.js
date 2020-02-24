import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Home page</div>
    </Provider>
  );
}

export default App;
