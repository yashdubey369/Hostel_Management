import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useCustomConsumerData } from '../localStorage/authenticateToken';
 const Logout=()=> {
    const {doUserLogout}=useCustomConsumerData();
    useEffect(()=>{
        doUserLogout();
    },[doUserLogout]);
  return (
   <Navigate to="/login"/>
  )
}
export default Logout;
//some  functionality of logout is left , done after logiut at navbar section