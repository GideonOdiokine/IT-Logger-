import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { addTech } from "../../actions/techsActions";
import { connect } from "react-redux";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter first and last name" });
    } else {
      addTech({ firstName, lastName });
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={firstName}
              name="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="message">First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={lastName}
              name="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="message">Last Name</label>
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
// const modalStyle = {
//   width: "60%",
//   height: "60%",
// };
export default connect(null, { addTech })(AddTechModal);
