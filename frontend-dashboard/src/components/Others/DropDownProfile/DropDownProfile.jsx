import React from "react";
import "./DropDownProfile.css";

import Avatar from "../../../assets/Avatar.png";
import {
  Dropdown
} from "react-bootstrap";
import ProfileModal from "../../Modals/ProfileModals/ProfileModal/ProfileModal";
import { createBrowserHistory } from "history";
const DropDownProfile = (props) => {
  const logoutUser = () => {
    localStorage.clear();
    window.location.reload();
  };
  const history = createBrowserHistory();

  return (
    <div className="profile-dropdown ml-auto mr-3">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="ml-auto mr-4 user-text">
            <img src={Avatar} alt="Avatar" class="rounded mr-3"></img>
            Hi, {props.user.name}
          </div>
          <div className="dropdown-menu-items">
            <Dropdown.Menu>
              <Dropdown.Item className="menu-items">
                <ProfileModal details={props.user}/>
                {/* { history.location.pathname === "/users" ? (window.location.reload()): null} */}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={logoutUser}>
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
};

export default DropDownProfile;
