import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PeopleDataContext from './PeopleDataContext';

const PeopleDataProvider = ({ children }) => {
  const [peopleData, setPeopleData] = useState([[]]);

  return (
    <PeopleDataContext.Provider value={{ peopleData, setPeopleData }}>
      {children}
    </PeopleDataContext.Provider>
  );
};

PeopleDataProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PeopleDataProvider;
