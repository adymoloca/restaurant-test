import React from "react";
import "./HomePage.css";
import DatePicker from "../../components/Others/DatePicker/DatePicker";
import LiveViewCards from "../../components/Others/LiveViewCards/LiveViewCards";
import DownloadButton from "../../components/Buttons/DownloadButton/DownloadButton";
import OrdersChart from "../../components/Charts/OrdersChart/OrdersChart";
import IncomesChart from "../../components/Charts/IncomesChart/IncomesChart";
import { createBrowserHistory } from "history";

const HomePage = (props) => {
  const history = createBrowserHistory();
  if (!props.token) {
    history.push("/login");
    window.location.reload();
  }

  return (
    <div>
      <div className="col-3 head-title">
        <h3>Home</h3>
      </div>
      <div className="row mt-5 d-flex">
        <div className="col">
          <DatePicker />
        </div>
        <div className="col float-right">
          <DownloadButton />
        </div>
      </div>
      <div className="col mt-5 d-flex container-fluid justify-content-center">
        <OrdersChart />
        <IncomesChart />
      </div>
      <div className="col-3 live-view mt-3">
        <h3>Live overview</h3>
      </div>
      <div>
        <LiveViewCards />
      </div>
    </div>
  );
};

export default HomePage;
