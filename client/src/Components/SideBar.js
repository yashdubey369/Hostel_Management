import React from "react";
import "./SideBar.css";
import { FaHome, FaHotel } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import SidebarButton from "./SidebarButton";
function SideBar() {
  return (
    <div className="side-main">
      <h1 id="side-heading">DashBoard</h1>
      <div className="side-container">
        <SidebarButton to="/" title="Home" icon={<FaHome className="side-icon" />}/>
        <SidebarButton to="/hostel" title="Hostel" icon={<FaHotel className="side-icon" />}/>
        <SidebarButton to="/mess" title="mess" icon={<FaBowlFood className="side-icon" />}/>
      </div>
    </div>
  );
}

export default SideBar;
