import React, {useState, useEffect} from 'react';
import './TableTable.css';
import Table from 'react-bootstrap/Table';
import Axios from "axios";
import data from "../../../data/constants";
import DeleteTableModal from '../../Modals/TableModals/DeleteTableModal/DeleteTableModal';
import UpdateTableModal from '../../Modals/TableModals/UpdateTableModal/UpdateTableModal';
import SearchBar from '../../Others/SearchBar/SearchBar';
import {
  Dropdown
} from 'react-bootstrap';
import arrow from '../../../assets/arrow-down.png';

const TableTable = () => {
  const [tableFromStorage, setTableFromStorage] = useState(JSON.parse(localStorage.getItem('tableDetailsStorage')));
  const [tableDetails, setTableDetails] = useState(tableFromStorage ? tableFromStorage : null);
  const [filteredTables, setFilteredTables] = useState(tableDetails);

  const getTables = (e) => {
    Axios.get(data.baseUrl + "api/admin/tables")
      .then((res) => {
        localStorage.setItem('tableDetailsStorage', JSON.stringify(res.data.tables));
        setTableDetails(res.data.tables);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  useEffect(() => {
    getTables();
  }, []);

  const search = (value) => {
    setFilteredTables(tableDetails.filter(element => (element.table_number.toLowerCase().includes(value.toLowerCase()))))
  }


  const populateTable = (params) => {
    let items = [];
    for (let item of params) {
      items.push(
        <tr>
          <td>{item.table_number}</td>
          <td>{item.table_seats}</td>
          <td>{item.table_indoor}</td>
          <td><UpdateTableModal details={item}/></td>
          <td><DeleteTableModal details={item}/></td>
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
                    Number of table <img src={arrow} alt="Arrow Down" />{' '}
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
                    Available places  <img src={arrow} alt="Arrow Down" />{' '}
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
                    Location <img src={arrow} alt="Arrow Down" />{' '}
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
          {filteredTables != null ? populateTable(filteredTables) 
                : (tableDetails ? populateTable(tableDetails) : null)}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default TableTable;
