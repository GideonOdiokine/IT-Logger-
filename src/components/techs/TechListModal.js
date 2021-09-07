import React, { useEffect, useState } from "react";
import TechList from "./TechList";
import axios from "axios";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getTechs = async () => {
    setLoading(true);
    const res = await axios.get("/techs");
    setTechs(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">System Logs</h4>
          </li>
          {!loading &&
            techs.map((tech) => <TechList key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
