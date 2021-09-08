import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "../actions/types";

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
    case ADD_LOG:
      return {
        ...state,
        logs: [...state, action.payload],
        loading: false,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
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
