import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SingleResult from '../single_result';
import Paginate from './Paginate';

const SearchResults = ({
  pageNumber,
  changePage,
  people,
}) => {
  const [labelClassName, setLabelClassName] = useState(
    'search-results-label__list d-none',
  );

  const currentCharactersPage = people[pageNumber - 1];

  useEffect(() => {
    if (people.length > 1) setLabelClassName('search-results-label__list');
  }, [people]);

  const handlePageButtonClick = () => {
    changePage(pageNumber);
  };

  return (
    <>
      <button type="button" onClick={handlePageButtonClick}>{pageNumber}</button>
      <ul className={labelClassName}>
        <li className="search-results-label__element" key="name">Name</li>
        <li className="search-results-label__element" key="homeland">Homeland</li>
        <li className="search-results-label__element" key="population">Population</li>
      </ul>
      <div>
        {currentCharactersPage?.map((person) => (
          <>
            <SingleResult person={person} planetUrl={person.homeworld} key={person.name} />
          </>
        ))}
      </div>

      <div className="page-changing__container">
        <Paginate people={people} />
      </div>
    </>
  );
};

SearchResults.defaultProps = {
  pageNumber: 1,
  changePage: () => {},
  people: [],
};

SearchResults.propTypes = {
  pageNumber: PropTypes.number,
  changePage: PropTypes.func,
  people: PropTypes.arrayOf(PropTypes.array),
};

export default SearchResults;
