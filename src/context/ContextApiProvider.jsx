import React, { useEffect, useState } from "react";

import { api } from "../hook/api";
import ApiContext from "./APiConext";
const ContextApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const { data } = await api("https://dummyjson.com/products/categories");
    setApiData(data);
  };
  useEffect(() => {
    // Call your fetchData function somewhere in your component
    fetchData();
    // console.log(apiData);
  }, []);
  return (
    <ApiContext.Provider value={{ apiData, setApiData }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ContextApiProvider;
