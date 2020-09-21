import React from 'react';
import NestedMenu from '../../../components/Others/NestedMenu/NestedMenu';
import "./Cupons.css";
import { createBrowserHistory } from "history";
import AddCouponModal from "../../../components/Modals/CouponsModals/AddCouponModal/AddCouponModal"
import OpenModalsButton from "../../../components/Buttons/OpenModalsButton/OpenModalsButton";
import CouponsTable from '../../../components/Tabels/CouponsTable/CouponsTable';

const Cupons = (props) => {
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
          <h3>Cupons</h3>
          <div className="col float-right">
            <OpenModalsButton children={<AddCouponModal/>}/>
          </div>
        </div>
      </div>
      <div><CouponsTable/></div>
    </div>
  );
};

export default Cupons;
