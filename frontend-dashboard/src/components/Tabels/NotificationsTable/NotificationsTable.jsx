import React from 'react';
import './NotificationsTable.css';
import Table from 'react-bootstrap/Table';
import {
  Dropdown
} from 'react-bootstrap';
import arrow from '../../../assets/arrow-down.png';
import trash from '../../../assets/trash.png';
import SearchBar from '../../Others/SearchBar/SearchBar';

const NotificationsTable = () => {
  return (
    <div>
    <div className="col float-right">
        <SearchBar/>
    </div>
    <div className="container-fluid mt-5">
      <Table responsive="sm">
        <thead className="table-header">
          <tr>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head">
                    Title <img src={arrow} alt="Arrow Down" />{' '}
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
                    Message <img src={arrow} alt="Arrow Down" />{' '}
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
                    Scheduled/Shipped <img src={arrow} alt="Arrow Down" />{' '}
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
            <th></th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Notification title</td>
            <td>
              Zandstraat 20, 3660 Oudsbergen, Zandstraat 20, 3660 Oudsbergen
            </td>
            <td>1/10/2020</td>
            <td>
              <img src={trash} alt="" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default NotificationsTable;
