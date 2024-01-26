import React from 'react'
import './HomePage.css'
import Cards from '../Components/Cards'
function HomePage() {
  return (
    <div className='home-main'>
      <Cards to="/hostel" title="Hostel"/>
      <Cards to="/mess" title="Mess"/>
    </div>
  )
}

export default HomePage
