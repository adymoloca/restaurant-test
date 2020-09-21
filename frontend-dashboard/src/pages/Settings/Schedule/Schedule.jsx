import React from 'react';
import NestedMenu from '../../../components/Others/NestedMenu/NestedMenu';
import "./Schedule.css";
import SearchBar from "../../../components/Others/SearchBar/SearchBar";
import { createBrowserHistory } from "history";

const Schedule = (props) => {
  const history = createBrowserHistory();
  if (!props.token) {
    history.push("/login");
    window.location.reload();
  }

  return (
    <div>
        <div><NestedMenu/></div>
      <div className="row d-flex">
        <div className="col head-title">
          <h3>Schedule</h3>
          <div className="col float-right">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
