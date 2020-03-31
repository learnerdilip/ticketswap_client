import axios from "axios";

const baseUrl = `https://devdilip-ticketswap-server.herokuapp.com/`;

const commentSent = data => {
  return {
    type: "COMMENT_CREATED",
    payload: data
  };
};
export const sendComment = (comment, jwt) => async dispatch => {
  const config = { Authorization: `Bearer ${jwt}` };
  const response = await axios.post(`${baseUrl}/sendcomment`, comment, {
    headers: config
  });
  console.log("====--------===========", response.data);
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
  // console.log("the response for comment list", response.data);
  dispatch(ticketCommentFetched(response.data));
};
