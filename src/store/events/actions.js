import axios from "axios";

const baseUrl = `http://localhost:4000`;

const eventCreated = data => {
  return {
    type: "EVENT_ADDED",
    payload: data
  };
};
export const sendEvent = fullevent => async dispatch => {
  const response = await axios.post(`${baseUrl}/postevent`, fullevent);
  // console.log("THE SERVER RESPONSE FROM POST EVENTS-------- ", response.data);
  dispatch(eventCreated(response.data));
};

const eventsFetched = eventsList => {
  return {
    type: "EVENTS_FETCHED",
    payload: eventsList
  };
};
export const getEventsList = () => async dispatch => {
  const response = await axios.get(`${baseUrl}/getevents`);
  // console.log("THE EVENTS LIST FETCH FROM SERVER", response.data);
  dispatch(eventsFetched(response.data));
};

export const clickEventUpdate = currentEvent => dispatch => {
  dispatch({
    type: "EVENT_CLICK_UPDATE",
    payload: currentEvent
  });
};
