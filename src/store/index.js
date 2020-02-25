import { combineReducers } from "redux";
import user from "./user/reducer";
import events from "./events/reducer";
import tickets from "./tickets/reducer";
import comments from "./comments/reducer";

export default combineReducers({
  // your reducers will go here
  user,
  events,
  tickets,
  comments
});
