import React from 'react';
import NestedMenu from '../../../components/Others/NestedMenu/NestedMenu';
import "./Categories.css";
import { createBrowserHistory } from "history";
import AddCategoryModal from "../../../components/Modals/CategoriesModals/AddCategoryModal/AddCategoryModal"
import OpenModalsButton from "../../../components/Buttons/OpenModalsButton/OpenModalsButton";
import CategoriesTable from '../../../components/Tabels/CategoryTable/CategoryTable';
const Categories = (props) => {
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
          <h3>Categories</h3>
          <div className="col float-right">
            <OpenModalsButton children={<AddCategoryModal/>}/>
          </div>
        </div>
      </div>
      <div><CategoriesTable/></div>
    </div>
  );
};

export default Categories;
