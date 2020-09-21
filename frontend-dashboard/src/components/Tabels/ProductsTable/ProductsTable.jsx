import React, {useState, useEffect} from 'react';
import './ProductsTable.css';
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import data from "../../../data/constants";
import DeleteProductModal from '../../Modals/ProductsModals/DeleteProductModal/DeleteProductModal';
import UpdateProductModal from '../../Modals/ProductsModals/UpdateProductModal/UpdateProductModal';
import SearchBar from '../../Others/SearchBar/SearchBar';

const ProductsTable = () => {
    const [productsFromStorage, setProductsFromStorage] = useState(JSON.parse(localStorage.getItem('productsDetailsStorage')));
    const [productsDetails, setProductsDetails] = useState(productsFromStorage ? productsFromStorage : null);
    const [filteredProducts, setFilteredProducts] = useState(productsDetails);

  const getProducts = (e) => {
    Axios.get(data.baseUrl + "api/admin/products")
      .then((res) => {
        localStorage.setItem('productsDetailsStorage', JSON.stringify(res.data.products));
        setProductsDetails(res.data.products);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const search = (value) => {
    setFilteredProducts(productsDetails.filter(element => (element.product_name.toLowerCase().includes(value.toLowerCase()))))
  }

  const populateTable = (params) => {
    let items = [];
    for (let item of params) {
      items.push(
        <tr>
          <td>{item.product_images}</td>
          <td>{item.product_name}</td>
          <td>{item.product_category}</td>
          <td>{item.product_price}</td>
          <td>{item.product_description}</td>
          <td><UpdateProductModal details={item}/></td>
          <td><DeleteProductModal details={item}/></td>
        </tr>
      )
    }
    return items;
  }
  return (
    <div>
    <div className="col float-right">
        <SearchBar  placeholder='search...' handleChange={(e)=> search(e.target.value)}/>
    </div>
    <div className="container-fluid mt-5">
      <Table>
        <tbody className="table-body">
        {filteredProducts != null ? populateTable(filteredProducts) : (productsDetails ? populateTable(productsDetails) : null)}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default ProductsTable;
