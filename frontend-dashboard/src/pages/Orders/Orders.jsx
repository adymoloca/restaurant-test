import React from "react";
import "./Orders.css";
import LiveViewCards from "../../components/Others/LiveViewCards/LiveViewCards";
import DownloadButton from "../../components/Buttons/DownloadButton/DownloadButton";
import OrdersChart from "../../components/Charts/OrdersChart/OrdersChart";
import IncomesChart from "../../components/Charts/IncomesChart/IncomesChart";
import { createBrowserHistory } from "history";

const Events = (props) => {
  const history = createBrowserHistory();
  if (!props.token) {
    history.push("/login");
    window.location.reload();
  }

  return (
    <div>
      <div className="col-3 head-title">
        <h3>Orders</h3>
      </div>
      
    </div>
  );
};

export default Events;
