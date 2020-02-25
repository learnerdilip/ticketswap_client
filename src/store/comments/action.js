import axios from "axios";

const baseUrl = `http://localhost:4000`;

const commentSent = data => {
  return {
    type: "COMMENT_CREATED",
    payload: data
  };
};
export const sendComment = comment => async dispatch => {
  console.log("-----------before sending", comment);

  const response = axios.post(`${baseUrl}/sendcomment`, comment);
  dispatch(commentSent(response.data));
};
