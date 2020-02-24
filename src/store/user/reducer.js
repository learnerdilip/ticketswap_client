const initialState = {
  isLoggedIn: false,
  token: null,
  userid: null,
  email: null,
  userCreated: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isLoggedIn: true,
        userid: action.payload.id,
        email: action.payload.email,
        token: action.payload.token
      };
    }

    case "USER_CREATED": {
      return { ...state, userCreated: true };
    }

    default: {
      return { ...state, isLoggedIn: true };
    }
  }
}
