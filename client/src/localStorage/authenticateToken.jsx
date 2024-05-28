// localStorage/authenticateToken.js

import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {

  const[token,setToken]=useState(localStorage.getItem("token"));
  const localStorageTokenStore = (passToken) => {
return localStorage.setItem('token', passToken);
  };
const doUserLogout=()=>{
  setToken("");
  return localStorage.removeItem("token");
}
  return (
    <MyContext.Provider value={{ localStorageTokenStore,doUserLogout }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to consume the context
const useCustomConsumerData = () => {
  return useContext(MyContext);
};

export { MyContext, MyProvider, useCustomConsumerData };
