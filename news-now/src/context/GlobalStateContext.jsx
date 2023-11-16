import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPayed, setIsPayed] = useState(false);

  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    isPayed,
    setIsPayed
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
