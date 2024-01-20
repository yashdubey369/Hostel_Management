import React from "react";
import "./SideBar.css";
import { FaHome, FaHotel } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="side-main">
      <h1 id="side-heading">DashBoard</h1>
      <ul className="side-container">
        <Link to="" className="link">
          <li className="sidebar-row">
            <FaHome className="side-icon" />{" "}
            <spam className="side-title">Home</spam>
          </li>
        </Link>
        <Link to="hostel" className="link">
          <li className="sidebar-row">
            <FaHotel className="side-icon" />
            <spam className="side-title">Hostel</spam>
          </li>
        </Link>
        <Link to="mess" className="link">
          <li className="sidebar-row">
            <FaBowlFood className="side-icon" />
            <spam className="side-title">Mess</spam>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
