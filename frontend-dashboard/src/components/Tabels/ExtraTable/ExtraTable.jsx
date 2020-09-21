import React, {useState, useEffect} from 'react';
import './ExtraTable.css';
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import data from "../../../data/constants";
import DeleteCategoryExtraModal from '../../Modals/ExtraModals/CategoryExtraModals/DeleteCategoryExtraModal/DeleteCategoryExtraModal';
import DeleteItemExtraModal from '../../Modals/ExtraModals/ItemExtraModals/DeleteItemExtraModal/DeleteItemExtraModal';
import UpdateCategoryExtraModal from '../../Modals/ExtraModals/CategoryExtraModals/UpdateCategoryExtraModal/UpdateCategoryExtraModal';
import UpdateItemExtraModal from '../../Modals/ExtraModals/ItemExtraModals/UpdateItemExtraModal/UpdateItemExtraModal';
import SearchBar from '../../Others/SearchBar/SearchBar';

const ExtraList = () => {
    const [extrasFromStorage, setExtrasFromStorage] = useState(JSON.parse(localStorage.getItem('extrasDetailsStorage')));
    const [extrasDetails, setExtrasDetails] = useState(extrasFromStorage ? extrasFromStorage : null);
    const [filteredExtras, setFilteredExtras] = useState(extrasDetails);
    const [extraItemsFromStorage, setExtraItemsFromStorage] = useState(JSON.parse(localStorage.getItem('extraItemsDetailsStorage')));
    const [extraItemsDetails, setExtraItemsDetails] = useState(extraItemsFromStorage ? extraItemsFromStorage : null);

  const getExtras = (e) => {
    Axios.get(data.baseUrl + "api/admin/extraCategories")
      .then((res) => {
        localStorage.setItem('extrasDetailsStorage', JSON.stringify(res.data.extraCategories));
        setExtrasDetails(res.data.extraCategories);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  const getExtraItems = (e) => {
    Axios.get(data.baseUrl + "api/admin/extras")
      .then((res) => {
        localStorage.setItem('extraItemsDetailsStorage', JSON.stringify(res.data.extras));
        setExtraItemsDetails(res.data.extras);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  useEffect(() => {
    getExtras();
  }, []);
  useEffect(() => {
    getExtraItems();
  }, []);

  const search = (value) => {
    setFilteredExtras(extrasDetails.filter(element => (element.extra_category_name.toLowerCase().includes(value.toLowerCase()))))
  }

  const populatePage = (params) => {
    let items = [];
    for (let item of params) {
      items.push(
        <div>
            <div>
                <span className="inline-block1">{item.extra_category_name}</span>
                <span className="inline-block1"><UpdateCategoryExtraModal details={item}/></span>
                <span className="inline-block1"><DeleteCategoryExtraModal details={item}/></span>
            </div>
            <div>
                <span>{populateList(extraItemsDetails,item.extra_category_name)}</span>
            </div>
        </div>
      )
    }
    return items;
  }

  const populateList = (params, name) => {
    let items = [];
    for (let item of params) {
        if(item.extra_category===name)
      items.push(
        <div>
          <span className="inline-block2">{item.extra_name}</span>
          <span className="inline-block2">Price: {item.extra_price}</span>
          <span className="inline-block2"><UpdateItemExtraModal details={item}/></span>
          <span className="inline-block2"><DeleteItemExtraModal details={item}/></span>
        </div>
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
        {filteredExtras != null ? populatePage(filteredExtras) : (extrasDetails ? populatePage(extrasDetails) : null)}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default ExtraList;
