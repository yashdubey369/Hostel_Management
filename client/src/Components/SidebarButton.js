import React from 'react'
import { IconContext } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'
import "./SideBar.css"
function SidebarButton(props) {
    const location=useLocation();
    const isActive= location.pathname===props.to;
    const btnClass=isActive? "sidebar-row active" : "sidebar-row"
  return (
    <Link to={props.to}> 
    <div className={btnClass}>
      <IconContext.Provider value={{ size:"22px",className: "btn-icon"}}>
      {props.icon} 
      <p className="side-title">{props.title}</p>
      </IconContext.Provider>
    </div>
  </Link>
  )
}

export default SidebarButton