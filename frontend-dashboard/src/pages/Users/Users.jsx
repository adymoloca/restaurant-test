import React from "react";
import "./Users.css";
import UsersTable from "../../components/Tabels/UsersTable/UsersTable";
import { createBrowserHistory } from "history";
import OpenModalsButton from "../../components/Buttons/OpenModalsButton/OpenModalsButton";
import AddUserModal from "../../components/Modals/UsersModals/AddUserModal/AddUserModal";

const Users = (props) => {
  const history = createBrowserHistory();
  if (!props.token) {
    history.push("/login");
    window.location.reload();
  }
  return (
    <div>
      <div className="row d-flex">
        <div className="col head-title">
          <h3>Users</h3>
          <div className="col float-right">
          <OpenModalsButton children={<AddUserModal/>}/> 
          </div>
        </div>
      </div>
      <UsersTable />
    </div>
  );
};

export default Users;
