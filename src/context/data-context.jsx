{
  /* This is so that any lead that is gonna be created can be moved anywhere in the app  */
}

import { createContext, useContext, useState } from "react";

// Create the context
const DataContext = createContext();

// Provide the context to the app
export const DataProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prev) => [...prev, entry]);
  };

  return (
    <DataContext.Provider value={{ entries, addEntry }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use it easily
export const useData = () => useContext(DataContext);
