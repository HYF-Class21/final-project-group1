import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("isLoggedIn") === "true" || false
  );
  const [isPayed, setIsPayed] = useState(false);
  const [counter, setCounter] = useState(
    parseInt(Cookies.get("counter"), 10) || 5
  );
  const [globData, setGlobData] = useState([]);

  useEffect(() => {
    Cookies.set("isLoggedIn", isLoggedIn.toString(), { expires: 7 });
    // Cookies.set("isPayed", isPayed.toString(), { expires: 7 });
    Cookies.set("counter", counter.toString(), { expires: 7 });
  }, [isLoggedIn, counter]);
  
  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    isPayed,
    setIsPayed,
    counter,
    setCounter,
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
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
