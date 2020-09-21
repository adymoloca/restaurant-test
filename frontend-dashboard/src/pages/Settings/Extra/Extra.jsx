import React from 'react';
import NestedMenu from '../../../components/Others/NestedMenu/NestedMenu';
import "./Extra.css";
import { createBrowserHistory } from "history";
import AddExtraCategoryModal from '../../../components/Modals/ExtraModals/CategoryExtraModals/AddCategoryExtraModal/AddCategoryExtraModal';
import AddItemExtraModal from '../../../components/Modals/ExtraModals/ItemExtraModals/AddItemExtraModal/AddItemExtraModal';
import OpenModalsButton from "../../../components/Buttons/OpenModalsButton/OpenModalsButton";
import ExtraList from '../../../components/Tabels/ExtraTable/ExtraTable';

const Extra = (props) => {
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
          <h3>Extra</h3>
          <div className="col float-right">
            <OpenModalsButton children={<AddExtraCategoryModal/>}/>
            <OpenModalsButton children={<AddItemExtraModal/>}/>
          </div>
        </div>
      </div>
      <div><ExtraList/></div>
    </div>

    
  );
};

export default Extra;
