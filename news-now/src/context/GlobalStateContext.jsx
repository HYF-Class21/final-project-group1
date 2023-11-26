import { createContext, useContext, useState } from 'react';
import Cookies from "js-cookie";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("isLoggedIn") === "true");
  const [isPayed, setIsPayed] = useState(false);
  const [globData, setGlobData] = useState([]);

  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    isPayed,
    setIsPayed,
    globData,
    setGlobData
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
