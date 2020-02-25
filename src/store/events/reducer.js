const initialState = { currentevent: {}, eventlist: [] };

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENT_ADDED": {
      // const { id,name,description,imageUrl,startDate,endDate } = action.payload
      return {
        ...state,
        currentevent: action.payload,
        eventlist: [...state.eventlist, action.payload]
      };
    }
    case "EVENTS_FETCHED": {
      return { ...state, eventlist: action.payload };
    }
    case "EVENT_CLICK_UPDATE": {
      return { ...state, currentevent: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}
