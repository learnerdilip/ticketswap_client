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
export const sendTicket = (
  fullTicket,
  eventId,
  userid,
  jwt
) => async dispatch => {
  const config = { Authorization: `Bearer ${jwt}` };
  const response = await axios.post(
    `${baseUrl}/ticketpost`,
    {
      fullTicket,
      eventId,
      userid
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

const updateTicketRisk = riskTicket => {
  return {
    type: "TICKET_RISK_UPDATE",
    payload: riskTicket
  };
};
export const sendTicketForRiskCalc = ticket => async dispatch => {
  // console.log("the ticket in thunk", ticket);
  const response = await axios.post(`${baseUrl}/updaterisk`, ticket);
  // console.log("------response after risk calculation", response.data);
  dispatch(updateTicketRisk(response.data));
};

export const changeEditState = () => async dispatch => {
  return dispatch({
    type: "TOGGLE_TICKET_EDIT"
  });
};

export const sendEditTicket = (ticket, ticketState) => async dispatch => {
  const response = await axios.post(`${baseUrl}/editticket`, {
    ticket,
    ticketState
  });
  console.log("the editied ticket", response);
  // dispatch(ticketcreated(response.data));
};
