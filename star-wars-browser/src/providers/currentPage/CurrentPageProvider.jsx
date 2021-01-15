import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CurrentPageContext from './CurrentPageContext';

const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

CurrentPageProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default CurrentPageProvider;
