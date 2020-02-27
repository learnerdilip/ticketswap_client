const initialState = { currentcomment: null, commentList: [] };

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "COMMENT_CREATED": {
      return {
        ...state,
        currentcomment: action.payload,
        commentList: [...state.commentList, action.payload]
      };
    }
    case "COMMENTS_FETCHED": {
      if (action.payload.length) {
        return { ...state, commentList: action.payload };
      } else {
        return { ...state, commentList: [] };
      }
    }
    case "LOGOUT_USER": {
      return initialState;
    }
    default: {
      return { ...state };
    }
  }
}
