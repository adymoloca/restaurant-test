import React from 'react';
import NestedMenu from '../../../components/Others/NestedMenu/NestedMenu';
import "./Products.css";
import SearchBar from "../../../components/Others/SearchBar/SearchBar";
import { createBrowserHistory } from "history";
import AddProductModal from "../../../components/Modals/ProductsModals/AddProductModal/AddProductModal"
import OpenModalsButton from "../../../components/Buttons/OpenModalsButton/OpenModalsButton";
import ProductsTable from '../../../components/Tabels/ProductsTable/ProductsTable';

const Products = (props) => {
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
          <h3>Products</h3>
          <div className="col float-right">
            <OpenModalsButton children={<AddProductModal/>}/>
          </div>
        </div>
      </div>
      <div><ProductsTable/></div>
    </div>
  );
};

export default Products;
