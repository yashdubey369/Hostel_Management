import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom'
function Cards(props) {
  return (
    <Link className="link" to={props.to}> 
    {/* <div className="cards"> 
       {props.title}
    </div> */}
    <div class="cards-container">
        <div class="drop">
            <div class="content">
                <h2>{props.title}</h2>
            </div>
        </div>
         
    </div>
  </Link>

  )
}

export default Cards