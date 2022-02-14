import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import { getTechs } from "../../actions/techsActions";
import { timestamp } from "../../firebase/config";

const AddLogModal = ({ techs: { techs }, addLog, getTechs }) => {
  console.log(techs);
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = async () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        createdAt: timestamp(),
      };
<<<<<<< HEAD
      await addLog(newLog);
=======
     async addLog(newLog);
>>>>>>> a45091e34a02eefc3d679fe02463c5d44768dc63
      M.toast({ html: `Log added by ${tech}` });
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message">Log Message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              {techs.map((tec) => (
                <option key={tec.id}>
                  {tec.firstName}
                  {""} {tec.lastName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn "
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = (state) => ({
  techs: state.tech,
});

export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal);
