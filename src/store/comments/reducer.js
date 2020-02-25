const initialState = { currentComment: null, commentList: null };

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "COMMENT_CREATED": {
      return { ...state, currentComment: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}
