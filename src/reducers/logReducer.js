import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

const initialState = {
  logs: null,
  loading: false,
  current: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
