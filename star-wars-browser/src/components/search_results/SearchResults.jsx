import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SingleResult from '../single_result';
import Paginate from './Paginate';

const SearchResults = ({ pageNumber, changePage, peopleData }) => {
  const [labelClassName, setLabelClassName] = useState(
    'search-results-label__list d-none',
  );

  const currentCharactersPage = peopleData[pageNumber - 1];

  useEffect(() => {
    if (peopleData.length > 1) setLabelClassName('search-results-label__list');
  }, [peopleData]);

  return (
    <>
      <button type="button" onClick={changePage(pageNumber)}>{pageNumber}</button>
      <ul className={labelClassName}>
        <li className="search-results-label__element">Name</li>
        <li className="search-results-label__element">Homeland</li>
        <li className="search-results-label__element">Population</li>
      </ul>
      <ul>
        {currentCharactersPage?.map((person) => (
          <SingleResult person={person} />
        ))}
      </ul>

      <ul className="page-changing__container">
        <Paginate peopleData={peopleData} />
      </ul>
    </>
  );
};

SearchResults.defaultProps = {
  pageNumber: 1,
  changePage: () => {},
  peopleData: [],
};

SearchResults.propTypes = {
  pageNumber: PropTypes.number,
  changePage: PropTypes.func,
  peopleData: PropTypes.arrayOf(PropTypes.array),
};

export default SearchResults;
