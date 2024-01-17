import React from "react";
import { ImSearch } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="virat">
      <div className="hai">
        <ul className="hello">
          <li>
            <input type="text" id="fname" name="fname" />
          </li>
        </ul>
      </div>
      <ImSearch size={20} />
      <CgProfile className="ji" size={30} />
    </div>
  );
}

export default NavBar;
