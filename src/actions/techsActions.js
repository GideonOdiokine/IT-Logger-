import {
  GET_TECHS,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
  ADD_TECH,
} from "../actions/types";
import { db } from "../firebase/config";

// Get Techs
export const getTechs = () => {
  return async (dispatch) => {
    try {
      setLoading();

      // const res = await fetch("/techs");
      // const data = await res.json();
      await db.collection("techs").onSnapshot((snapshot) => {
        let data = [];

        snapshot.docs.map((doc) => {
          data.push({ ...doc.data(), id: doc.id });
          dispatch({
            type: GET_TECHS,
            payload: data,
          });
        });
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.message,
      });
    }
  };
};

// Add new log

export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      setLoading();

      // const res = await fetch("/techs", {
      //   method: "POST",
      //   body: JSON.stringify(tech),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const data = await res.json();
      const data = await db.collection("techs").add(tech);

      dispatch({
        type: ADD_TECH,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.message,
      });
    }
  };
};
// Delete Tech
export const deleteTech = (id) => {
  return async (dispatch) => {
    try {
      setLoading();

      // await fetch(`/techs/${id}`, {
      //   method: "DELETE",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      let data = await db.collection("techs").doc(id).delete();

      dispatch({
        type: DELETE_TECH,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.message,
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
