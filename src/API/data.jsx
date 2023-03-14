import React, { useState, createContext } from "react";
import Data from "../Data/data.json";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => Data);
  const UpdateData = (data) => {
    setData(data);
  };
  return (
    <DataContext.Provider value={{ data, UpdateData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
