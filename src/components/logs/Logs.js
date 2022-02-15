import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  const fetchData = () => {
    getLogs();
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Techgene Students Record</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">
          <b>No logs to show...</b>
        </p>
      ) : (
        logs?.map((log, i) => <LogItem key={i} log={log} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
