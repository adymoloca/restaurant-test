import React, {useState, useEffect} from 'react';
import './CouponsTable.css';
import Table from 'react-bootstrap/Table';
import {
  Dropdown
} from 'react-bootstrap';
import arrow from '../../../assets/arrow-down.png';
import UpdateCouponModal from '../../Modals/CouponsModals/UpdateCouponModal/UpdateCouponModal';
import DeleteCouponModal from '../../Modals/CouponsModals/DeleteCouponModal/DeleteCouponModal';
import Axios from "axios";
import data from "../../../data/constants";
import SearchBar from '../../Others/SearchBar/SearchBar';


const CouponsTable = () => {
  const [couponsFromStorage, setCuponsFromStorage] = useState(JSON.parse(localStorage.getItem('couponDetailsStorage')));
  const [couponDetails, setCouponDetails] = useState(couponsFromStorage ? couponsFromStorage : null);
  const [filteredCoupons, setFilteredCoupons] = useState(couponDetails);

  const getCoupons = (e) => {
    Axios.get(data.baseUrl + "api/admin/coupons")
      .then((res) => {
        localStorage.setItem('couponDetailsStorage', JSON.stringify(res.data.coupons));
        setCouponDetails(res.data.coupons);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  useEffect(() => {
    getCoupons();
  }, []);

  const search = (value) => {
    setFilteredCoupons(couponDetails.filter(element => (element.coupon_name.toLowerCase().includes(value.toLowerCase()))))
  }


  const populateTable = (params) => {
    let items = [];
    for (let item of params) {
      items.push(
        <tr>
          <td>{item.coupon_name}</td>
          <td>{item.coupon_value}</td>
          <td>{item.coupon_minOrder}</td>
          <td><UpdateCouponModal details={item}/></td>
          <td><DeleteCouponModal details={item}/></td>
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
        <thead className="table-header-merchants">
          <tr>
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head">
                    Coupon name <img src={arrow} alt="Arrow Down" />{' '}
                  </div>
                  <div className="dropdown-menu-items">
                    <Dropdown.Menu>
                      <Dropdown.Item >Ascendent</Dropdown.Item>
                      <Dropdown.Item >Descendent</Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </Dropdown.Toggle>
              </Dropdown>
            </th>
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head">
                    Coupon value  <img src={arrow} alt="Arrow Down" />{' '}
                  </div>
                  <div className="dropdown-menu-items">
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Ascendent</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Descendent</Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </Dropdown.Toggle>
              </Dropdown>
            </th>
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head">
                    Minimum order <img src={arrow} alt="Arrow Down" />{' '}
                  </div>
                  <div className="dropdown-menu-items">
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Ascendent</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Descendent</Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </Dropdown.Toggle>
              </Dropdown>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {filteredCoupons != null ? populateTable(filteredCoupons) 
                : (couponDetails ? populateTable(couponDetails) : null)}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default CouponsTable;