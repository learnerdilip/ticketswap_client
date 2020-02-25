const initalState = { ticket: {}, ticketList: [] };

export default function ticketReducer(state = initalState, action) {
  switch (action.type) {
    case "TICKET_CREATED": {
      //payload should be a ticket object
      return {
        ...state,
        ticket: action.payload,
        ticketList: [state.ticketList, action.payload]
      };
    }
    case "TICKTS_FETCHED": {
      //the payload should be an array of tickets
      return {
        ...state,
        ticketList: [...state.ticketList, action.payload]
      };
    }
    default: {
      return { ...state };
    }
  }
}
