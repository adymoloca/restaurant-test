import React from 'react';
import NestedMenu from '../../../components/Others/NestedMenu/NestedMenu';
import "./Table.css";
import { createBrowserHistory } from "history";
import AddTableModal from "../../../components/Modals/TableModals/AddTableModal/AddTableModal";
import OpenModalsButton from "../../../components/Buttons/OpenModalsButton/OpenModalsButton";
import TableTable from '../../../components/Tabels/TableTable/TableTable';

const Table = (props) => {
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
          <h3>Table</h3>
          <div className="col float-right">
            <OpenModalsButton children={<AddTableModal/>}/>
          </div>
        </div>
      </div>
      <div><TableTable/></div>
    </div>
  );
};

export default Table;
