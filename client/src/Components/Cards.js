import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom'
function Cards(props) {
  return (
    <Link className="link" to={props.to}> 
    <div className="cards"> 
       {props.title}
    </div>
  </Link>

  )
}

export default Cards