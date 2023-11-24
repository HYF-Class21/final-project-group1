import { createContext, useContext, useState } from 'react';
import Cookies from "js-cookie";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("isLoggedIn") === "true");
  const [isPayed, setIsPayed] = useState(false);
  const [globArticles, setGlobArticles] = useState([]);
  const [filters, setFilters] = useState({ country: "us", category: "sports" });


  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    isPayed,
    setIsPayed,
    globArticles,
    setGlobArticles,
    filters,
    setFilters
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
