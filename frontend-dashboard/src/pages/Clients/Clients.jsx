import React from "react";
import "./Clients.css";
import ClientsTable from "../../components/Tabels/ClientsTable/ClientsTable";
import { createBrowserHistory } from "history";
import AddClientModal from "../../components/Modals/ClientsModals/AddClientModal/AddClientModal"
import OpenModalsButton from "../../components/Buttons/OpenModalsButton/OpenModalsButton";

const Clients = (props) => {
  const history = createBrowserHistory();
  if (!props.token) {
    history.push("/login");
    window.location.reload();
  }

  return (
    <div>
      <div className="row d-flex">
        <div className="col head-title">
          <h3>Clients</h3>
          <div className="col float-right">
            <OpenModalsButton children={<AddClientModal/>}/>
          </div>
        </div>
      </div>
      <div>
        <ClientsTable />
      </div>
    </div>
  );
};

export default Clients;
