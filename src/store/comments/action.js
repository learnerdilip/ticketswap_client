import axios from "axios";

const baseUrl = `http://localhost:4000`;

const commentSent = data => {
  return {
    type: "COMMENT_CREATED",
    payload: data
  };
};
export const sendComment = (comment, jwt) => async dispatch => {
  const config = { Authorization: `Bearer ${jwt}` };
  const response = axios.post(`${baseUrl}/sendcomment`, comment, {
    headers: config
  });
  dispatch(commentSent(response.data));
};

const ticketCommentFetched = data => {
  return {
    type: "COMMENTS_FETCHED",
    payload: data
  };
};
export const getComments = ticketid => async dispatch => {
  const response = await axios.post(`${baseUrl}/getticketcomments`, {
    ticketid
  });
  console.log("the response for comment list", response);
  dispatch(ticketCommentFetched(response.data));
};
