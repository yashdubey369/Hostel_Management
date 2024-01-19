import React from "react";
import { ImSearch } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-main">
      <div className="nav-search">
      <form onsubmit="event.preventDefault();" role="search">
        <label for="search">Search for stuff</label>
        <input
          id="search"
          type="search"
          placeholder="Search for Hostel,Mess,etc"
          autofocus
          required
        />
        <button type="submit">Go</button>
      </form>

      </div>
     <div className="profile">
       <CgProfile className="profile-pic" size={50} color="#d0d0d1" /> 
     </div>
      {/* this is navbar */}
    </div>
  );
}

export default NavBar;
