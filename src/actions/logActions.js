import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  // SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";
import { db } from "../firebase/config";

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    await db.collection("logs").onSnapshot((snapshot) => {
      let data = [];

      snapshot.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });

        dispatch({
          type: GET_LOGS,
          payload: data,
        });
      });
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.message,
    });
  }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    // const res = await fetch("/logs", {
    //   method: "POST",
    //   body: JSON.stringify(log),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
    const data = await db.collection("logs").add(log);

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.message,
    });
  }
};

// Delete log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    // await fetch(`/logs/${id}`, {
    //   method: "DELETE",
    // });

    await db.collection("logs").doc(id).delete();

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.message,
    });
  }
};

// Update log on server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    // const res = await fetch(`/logs/${log.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(log),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await res.json();
    let data = await db.collection("logs").doc(log.id).update({
      message: log.message,
      tech: log.tech,
      attention: log.attention,
    });

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.message,
    });
  }
};

// Search server logs
// export const searchLogs = (text) => async (dispatch) => {
//   try {
//     setLoading();

//     const res = await fetch(`/logs?q=${text}`);
//     const data = await res.json();

//     dispatch({
//       type: SEARCH_LOGS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText,
//     });
//   }
// };

// Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
