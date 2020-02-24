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
