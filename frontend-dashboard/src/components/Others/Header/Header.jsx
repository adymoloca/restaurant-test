import React, {useState, useEffect} from "react";
import "./Header.css";
import DropDownProfile from "../DropDownProfile/DropDownProfile";


const Header = (props) => {
  return (
    <div>
    <div className="bg-color row option">

      <DropDownProfile
        user={props.user}
        setUser={props.setUser}
        token={props.token}
        setToken={props.setToken}
      />
    </div>
    </div>
  )
    
};

export default Header;
