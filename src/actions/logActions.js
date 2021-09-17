import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";
import db from "../components/firebase/config";

export const getLogs = () => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await db.collection("logs").onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          console.log(doc);
        });
      });
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response,
      });
    }
  };
};

// Add new log

export const addLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch("/logs", {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err,
      });
    }
  };
};

// Delete log

export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
      setLoading();

      await fetch(`/logs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err,
      });
    }
  };
};

// Update Log
export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.json();

      dispatch({
        type: UPDATE_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err,
      });
    }
  };
};

export const searchLogs = (text) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response,
      });
    }
  };
};

// Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

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
