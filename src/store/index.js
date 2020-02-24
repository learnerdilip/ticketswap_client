import { combineReducers } from "redux";
import user from "./user/reducer";
import events from "./events/reducer";

export default combineReducers({
  // your reducers will go here
  user,
  events
});
