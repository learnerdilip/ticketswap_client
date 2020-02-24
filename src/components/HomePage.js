import React from "react";
import EventListContainer from "./events/EventListContainer";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>The home page</h2>
      <EventListContainer />
      <Link to="/login">TO LOGIN PAGE</Link>
      <br />
      <Link to="/signup">TO SIGN UP PAGE</Link>
    </div>
  );
}
