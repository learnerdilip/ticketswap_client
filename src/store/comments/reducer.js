const initialState = { currentcomment: null, commentList: null };

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "COMMENT_CREATED": {
      return { ...state, currentcomment: action.payload };
    }
    case "COMMENTS_FETCHED": {
      return { ...state, commentList: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}
