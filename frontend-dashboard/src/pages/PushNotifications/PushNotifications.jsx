import React from "react";
import "./PushNotifications.css";
import OpenModalsButton from "../../components/Buttons/OpenModalsButton/OpenModalsButton";
import NotificationsTable from "../../components/Tabels/NotificationsTable/NotificationsTable";
import { createBrowserHistory } from "history";
import NewNotificationModal from "../../components/Modals/NotificationsModals/NewNotificationModal/NewNotificationModal";

const Notifications = (props) => {
  const history = createBrowserHistory();
  if (!props.token) {
    history.push("/login");
    window.location.reload();
  }
  return (
    <div>
      <div className="row d-flex">
        <div className="col head-title">
          <h3>Push Notifications</h3>
          <div className="col float-right">
          <OpenModalsButton children={<NewNotificationModal/>}/>
          </div>
        </div>
      </div>
      <div>
        <NotificationsTable />
      </div>
    </div>
  );
};

export default Notifications;
