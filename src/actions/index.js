import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const SET_INPUT = "SET_INPUT";

export const setInput = (input) => (dispatch) => {
  dispatch({ type: SET_INPUT, payload: input });
};

export const fetchItems = () => (dispatch) => {
  let info;
  let ip;

  dispatch({ type: START_FETCHING });
  axios.get("https://jsonip.com/").then((response) => {
    ip = response.data.ip;
    console.log(ip);
    axios
      .post("http://localhost:5000/ip", { ip: ip })
      .then(
        (response) => (
          (info = response.data),
          console.log(info),
          dispatch({ type: FETCH_SUCCESS, payload: info })
        )
      )
      .catch((error) => dispatch({ type: FETCH_FAILURE, payload: error }));
  });
};
