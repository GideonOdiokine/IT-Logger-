import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {

  const deleteLogItem = () => {
    deleteLog(log.id);
    M.toast({ html: "Log deleted" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          Last updated by
          <span className="black-text"> {log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date.toDate()}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={deleteLogItem}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
