const initialState = { ticket: null, ticketList: null, editMode: false };

export default function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case "TICKET_CREATED": {
      //payload should be a ticket object
      return {
        ...state,
        ticket: action.payload,
        ticketList: [...state.ticketList, action.payload]
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
    case "LOGOUT_USER": {
      return initialState;
    }
    case "TICKET_RISK_UPDATE": {
      return { ...state, ticket: action.payload };
    }
    case "TOGGLE_TICKET_EDIT": {
      return { ...state, editMode: !state.editMode };
    }
    default: {
      return { ...state };
    }
  }
}
