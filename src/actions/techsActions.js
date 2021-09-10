import {
  GET_TECHS,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
  ADD_TECH,
} from "../actions/types";

// Get Techs
export const getTechs = () => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch("/techs");
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err,
      });
    }
  };
};

// Add new log

export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch("/techs", {
        method: "POST",
        body: JSON.stringify(tech),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: ADD_TECH,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err,
      });
    }
  };
};
// Delete Tech
export const deleteTech = (id) => {
  return async (dispatch) => {
    try {
      setLoading();

      await fetch(`/techs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: DELETE_TECH,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err,
      });
    }
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
