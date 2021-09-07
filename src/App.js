import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import { Fragment } from "react";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditModalLog from "./components/logs/EditModalLog";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
        <EditModalLog />
      </div>
    </Fragment>
  );
};

export default App;
