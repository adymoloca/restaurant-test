import React, {useState, useEffect} from 'react';
import './CategoryTable.css';
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import data from "../../../data/constants";
import DeleteCategoryModal from '../../Modals/CategoriesModals/CategoryDeleteModal/CategoryDeleteModal';
import UpdateCategoryModal from '../../Modals/CategoriesModals/UpdateCategoryModal/UpdateCategoryModal';
import SearchBar from '../../Others/SearchBar/SearchBar';

const CategoryTable = () => {
    const [categoryFromStorage, setCategoryFromStorage] = useState(JSON.parse(localStorage.getItem('categoryDetailsStorage')));
    const [categoryDetails, setCategoryDetails] = useState(categoryFromStorage ? categoryFromStorage : null);
    const [filteredCategories, setFilteredCategories] = useState(categoryDetails);

  const getCategories = (e) => {
    Axios.get(data.baseUrl + "api/admin/categories/getCategories")
      .then((res) => {
        localStorage.setItem('categoryDetailsStorage', JSON.stringify(res.data.categories));
        setCategoryDetails(res.data.categories);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const search = (value) => {
    setFilteredCategories(categoryDetails.filter(element => (element.category_name.toLowerCase().includes(value.toLowerCase()))))
  }

  const populateTable = (params) => {
    let items = [];
    for (let item of params) {
      items.push(
        <tr>
          <td>{item.category_image}</td>
          <td>{item.category_name}</td>
          <td>{item.category_description}</td>
          <td><UpdateCategoryModal details={item}/></td>
          <td><DeleteCategoryModal details={item}/></td>
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
        {filteredCategories != null ? populateTable(filteredCategories) : (categoryDetails ? populateTable(categoryDetails) : null)}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default CategoryTable;
