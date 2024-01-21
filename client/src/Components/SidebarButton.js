import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./SideBar.css"
function SidebarButton(props) {
    const location=useLocation();
    const isActive= location.pathname===props.to;
    const btnClass=isActive? "sidebar-row active" : "sidebar-row"
  return (
    <Link className="link" to={props.to}> 
    <div className={btnClass}>
      {props.icon} 
      <p className="side-title">{props.title}</p>
    </div>
  </Link>
  )
}

export default SidebarButton