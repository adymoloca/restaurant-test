import React, { useState, useEffect } from 'react';
import './UsersTable.css';
import Table from 'react-bootstrap/Table';
import {
  Dropdown
} from 'react-bootstrap';
import arrow from '../../../assets/arrow-down.png';
import DeleteUserModal from '../../Modals/UsersModals/DeleteUsersModal/DeleteUserModal';
import UserDetailsModal from '../../Modals/UsersModals/UserDetailsModal/UserDetailsModal';
import Axios from 'axios';
import data from '../../../data/constants';
import SearchBar from '../../Others/SearchBar/SearchBar';


const UsersTable = () => {
  const [usersFromStorage, setUsersFromStorage] = useState(JSON.parse(localStorage.getItem('userDetailsStorage')));
  const [userDetails, setUserDetails] = useState(usersFromStorage ? usersFromStorage : null);
  const [filteredUsers, setFilteredUsers] = useState(userDetails);

  const getUsers = (e) => {
    Axios.get(data.baseUrl + "api/admin/users")
      .then((res) => {
        localStorage.setItem('userDetailsStorage', JSON.stringify(res.data.users));
        setUserDetails(res.data.users);
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const search = (value) => {
    setFilteredUsers(userDetails.filter(element => (element.name.toLowerCase().includes(value.toLowerCase()))))
  }


  const populateTable = (params) => {
    let items = [];
    for (let item of params) {
      items.push(
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.user_admin ? 'true' : 'false'}</td>
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
                      <UserDetailsModal details={item} />
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <DeleteUserModal details={item} />
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
      <Table responsive="sm">
        <thead className="table-header">
          <tr>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head">
                    Name <img src={arrow} alt="Arrow Down" />{' '}
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
                    E-Mail <img src={arrow} alt="Arrow Down" />{' '}
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
                    Phone number<img src={arrow} alt="Arrow Down" />{' '}
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
                    User/Admin <img src={arrow} alt="Arrow Down" />{' '}
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
        {filteredUsers != null ? populateTable(filteredUsers) : (userDetails ? populateTable(userDetails) : null)}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default UsersTable;
