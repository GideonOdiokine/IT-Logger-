import React, { useEffect } from "react";
import TechList from "./TechList";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techsActions";

const TechListModal = ({ techs: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  });

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">System Logs</h4>
          </li>
          {techs.length === 0 && (
            <p className="center">
              <b>No Technician available</b>
            </p>
          )}
          {!loading &&
            techs.map((tech) => <TechList key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techs: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
