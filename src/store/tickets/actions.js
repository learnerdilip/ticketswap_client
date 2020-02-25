import axios from "axios";

const baseUrl = `http://localhost:4000`;

const ticketcreated = data => {
  return {
    type: "TICKET_CREATED",
    payload: data
  };
};

export const sendTicket = (fullTicket, eventId) => async dispatch => {
  console.log("OOOOOOOOOO the params before sending", fullTicket, eventId);

  const response = axios.post(`${baseUrl}/ticketpost`, { fullTicket, eventId });
  dispatch(ticketcreated(response.data));
};

const ticketsfetched = data => {
  return {
    type: "TICKTS_FETCHED",
    payload: data
  };
};

export const getTicketList = eventId => async dispatch => {
  console.log("id before sending ticket list request", { eventId });

  const response = await axios.get(`${baseUrl}/getticketlist`, {
    data: eventId
  });
  dispatch(ticketsfetched(response.data));
};
