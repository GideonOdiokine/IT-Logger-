import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techsActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechList = ({ tech, deleteTech }) => {
  const deleteTechItem = async () => {
   await deleteTech(tech.id);
    M.toast({ html: "Technician is removed" });
  };
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons text-gray" onClick={deleteTechItem}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTech })(TechList);
