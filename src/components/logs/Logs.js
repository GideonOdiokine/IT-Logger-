import React, { useEffect, useState } from "react";
import axios from "axios";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () => {
    setLoading(true);
    const res = await axios.get("/logs");
    setLogs(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getLogs();
  }, []);

  if (loading) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p>No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

export default Logs;
