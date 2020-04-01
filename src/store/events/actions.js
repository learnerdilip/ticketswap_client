import axios from "axios";

const baseUrl = `https://devdilip-ticketswap-server.herokuapp.com`;

const eventCreated = data => {
  return {
    type: "EVENT_ADDED",
    payload: data
  };
};
export const sendEvent = (fullevent, jwt) => async dispatch => {
  const config = { Authorization: `Bearer ${jwt}` };
  const response = await axios.post(`${baseUrl}/postevent`, fullevent, {
    headers: config
  });
  // console.log("THE SERVER RESPONSE FROM POST EVENTS-------- ", response.data);
  dispatch(eventCreated(response.data));
};

const eventsFetched = eventsList => {
  return {
    type: "EVENTS_FETCHED",
    payload: eventsList
  };
};
export const getEventsList = (limit, offset) => async dispatch => {
  const response = await axios.get(
    `${baseUrl}/getevents?limit=${limit}&offset=${offset}`
  );
  // console.log("THE EVENTS LIST FETCH FROM SERVER", response.data);
  dispatch(eventsFetched(response.data));
};

export const clickEventUpdate = currentEvent => dispatch => {
  dispatch({
    type: "EVENT_CLICK_UPDATE",
    payload: currentEvent
  });
};
