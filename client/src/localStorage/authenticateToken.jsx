// localStorage/authenticateToken.js

import React, { createContext, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const localStorageTokenStore = (passToken) => {
    localStorage.setItem('token', passToken);
  };

  return (
    <MyContext.Provider value={{ localStorageTokenStore }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to consume the context
const useCustomConsumerData = () => {
  return useContext(MyContext);
};

export { MyContext, MyProvider, useCustomConsumerData };
