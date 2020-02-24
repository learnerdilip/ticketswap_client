const initialState = { currentevent: {}, events: [] };

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENT_ADDED": {
      // const { id,name,description,imageUrl,startDate,endDate } = action.payload
      return {
        ...state,
        currentevent: action.payload
        // id: action.payload.id,
        // name: action.payload.name,
        // description: action.payload.description,
        // imageUrl: action.payload.imageUrl,
        // startDate: action.payload.startDate,
        // endDate: action.payload.endDate
      };
    }
    default: {
      return { ...state };
    }
  }
}
