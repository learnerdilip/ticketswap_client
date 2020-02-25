const initalState = { ticket: null, ticketList: null };

export default function ticketReducer(state = initalState, action) {
  switch (action.type) {
    case "TICKET_CREATED": {
      //payload should be a ticket object
      return {
        ...state,
        ticket: action.payload
      };
    }
    case "TICKETS_FETCHED": {
      //the payload should be an array of tickets
      return {
        ...state,
        ticketList: action.payload
      };
    }
    case "TICKET_CLICK_UPDATE": {
      return {
        ...state,
        ticket: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}
