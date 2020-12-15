import React, { useState } from "react";
import { CurrentPageContext } from "./CurrentPageContext";
const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export default CurrentPageProvider;
