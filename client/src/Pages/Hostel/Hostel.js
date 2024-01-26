import React from 'react'
import Cards from '../../Components/Cards'
import "./Hostel.css"
 function Hostel() {
   return (
    <div className='hostel-main'>
    <Cards to="/hostel/apply" title="Apply"/>
    <Cards to="/hostel/attendance" title="Attendance"/>
    <Cards to="/hostel/profile" title="Profile"/>
  </div>
   )
 }
 
 export default Hostel