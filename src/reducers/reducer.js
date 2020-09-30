import {
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  SET_INPUT,
} from "../actions/index";

const initialState = {
  info: [],
  input: 0,
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        info: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
