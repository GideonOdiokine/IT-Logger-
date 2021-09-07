import React from "react";

const TechList = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons text-gray">delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechList;
