import axios from "axios";

const baseUrl = `http://localhost:4000`;

const ticketsfetched = data => {
  return {
    type: "TICKETS_FETCHED",
    payload: data
  };
};
export const getTicketList = eventId => async dispatch => {
  const response = await axios.post(`${baseUrl}/getticketlist`, { eventId });
  dispatch(ticketsfetched(response.data));
};

const ticketcreated = data => {
  return {
    type: "TICKET_CREATED",
    payload: data
  };
};
export const sendTicket = (fullTicket, eventId, jwt) => async dispatch => {
  const config = { Authorization: `Bearer ${jwt}` };
  const response = await axios.post(
    `${baseUrl}/ticketpost`,
    {
      fullTicket,
      eventId
    },
    {
      headers: config
    }
  );
  dispatch(ticketcreated(response.data));
};

export const setCurrentTicket = ticket => async dispatch => {
  return dispatch({
    type: "TICKET_CLICK_UPDATE",
    payload: ticket
  });
};
