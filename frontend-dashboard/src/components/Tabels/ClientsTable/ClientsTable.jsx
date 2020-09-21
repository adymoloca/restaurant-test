import React, {useState, useEffect} from 'react';
import './ClientsTable.css';
import Table from 'react-bootstrap/Table';
import {
  Dropdown
} from 'react-bootstrap';
import arrow from '../../../assets/arrow-down.png';
import ClientsDetailsModal from '../../Modals/ClientsModals/ClientsDetailsModal/ClientsDetailsModal';
import ClientsDeleteModal from '../../Modals/ClientsModals/ClientsDeleteModal/ClientsDeleteModal';
import Axios from "axios";
import data from "../../../data/constants";
import SearchBar from '../../Others/SearchBar/SearchBar';


const ClientsTable = () => {
  const [clientsFromStorage, setClientsFromStorage] = useState(JSON.parse(localStorage.getItem('clientDetailsStorage')));
  const [clientDetails, setClientDetails] = useState(clientsFromStorage ? clientsFromStorage : null);
  const [filteredClients, setFilteredClients] = useState(clientDetails);

  const getClients = (e) => {
    Axios.get(data.baseUrl + "api/client")
      .then((res) => {
        localStorage.setItem('clientDetailsStorage', JSON.stringify(res.data.clients));
        setClientDetails(res.data.clients);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  useEffect(() => {
    getClients();
  }, []);

  const search = (value) => {
    setFilteredClients(clientDetails.filter(element => (element.client_name.toLowerCase().includes(value.toLowerCase()))))
  }

  const populateTable = (params) => {
    let items = [];
    for (let item of params) {
      items.push(
        <tr>
          <td>{item.client_name}</td>
          <td>{item.client_numberOfOrders}</td>
          <td>{item.client_email}</td>
          <td>{item.client_phone}</td>
          <td>{item.client_adress}</td>
          <td>{item.client_date_added}</td>
          <td className="table-data">
            {' '}
            <Dropdown className="actions-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="table-text-head actions-dropdown">
                  Actions <img src={arrow} alt="Arrow Down" />{' '}
                </div>
                <div className="dropdown-menu-items">
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <ClientsDetailsModal details={item} />
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <ClientsDeleteModal details={item} />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Dropdown.Toggle>
            </Dropdown>
          </td>
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
                    Client name <img src={arrow} alt="Arrow Down" />{' '}
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
                    Number of orders  <img src={arrow} alt="Arrow Down" />{' '}
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
                    E-mail  <img src={arrow} alt="Arrow Down" />{' '}
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
                    Phone <img src={arrow} alt="Arrow Down" />{' '}
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
                    Adress <img src={arrow} alt="Arrow Down" />{' '}
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
                    Client since <img src={arrow} alt="Arrow Down" />{' '}
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
          {filteredClients != null ? populateTable(filteredClients) : (clientDetails ? populateTable(clientDetails) : null)}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default ClientsTable;