import React from "react";
import "./AsideMenu.css";
import { Link } from "react-router-dom";
import {SidedLogoIcon, PieChartIcon, HouseIcon,  UserIcon, VectorIcon, SlidersIcon, SmileyFaceIcon, BucketIcon} from '../../../utils/iconsFactory';

const AsideMenu = () => {
  const imgSrc = [
    {
      source: PieChartIcon,
      name: "HOME",
      link: "/",
    },
    {
      source: BucketIcon,
      name: "Orders",
      link: "/orders",
    },
    {
      source: SmileyFaceIcon,
      name: "Clients",
      link: "/clients",
    },
    {
      source: UserIcon,
      name: "Users",
      link: "/users",
    },
    {
      source: VectorIcon,
      name: "Push Notifications",
      link: "/notifications",
    },
    {
      source: SlidersIcon,
      name: "Settings",
      link: "/settings/categories",
    },
  ];
  return (
    <div className="container">
       <Link to={"/"}>
        <SidedLogoIcon  alt="Logo" className="logo mb-5 mt-3 ml-5" />
      </Link>
      {imgSrc.map((item, idx) => {
        return (
          <div key={idx} className="col-4 menu-text">
            <Link to={item.link}>
              <div className="menu-text">
                <item.source alt={item.name} className="mr-3" />
                {item.name}
              </div>
            </Link>
          </div>
        );
      })}
      <div className="bottom-sidebar solid">
        <div className="menu-footer-text">© 2020 Restaurant</div>
      </div>
    </div>
  );
};
export default AsideMenu;
