import axios from "axios";

const baseUrl = `http://localhost:4000`;

function userLoggedIn(data) {
  return {
    type: "LOGIN_SUCCESS",
    payload: data
  };
}
export const userLogin = (email, password) => async dispatch => {
  console.log("You submitted!", email, password);
  const response = await axios.post(`${baseUrl}/userlogin`, {
    email,
    password
  });
  dispatch(userLoggedIn(response.data));
};

function userSignedUp(data) {
  return {
    type: "USER_CREATED",
    payload: data
  };
}
export const userSignup = (email, password) => async dispatch => {
  const response = await axios.post(`${baseUrl}/usersignup`, {
    email,
    password
  });
  // console.log("THE SIGNUP RESPONSE", response.status);
  if (response.status === 200) {
    dispatch(userSignedUp(response.status));
  }
};

export const resetsignup = () => dispatch => {
  return dispatch({
    type: "RESET_SIGNUP"
  });
};
