import React, { useState, useEffect, useContext } from 'react';

import PeopleDataContext from '../../providers/peopleData/PeopleDataContext';

import SingleResult from '../single_result';
import paginate from './Paginate';

const SearchResults = () => {
  const { peopleData } = useContext(PeopleDataContext);

  const [labelClassName, setLabelClassName] = useState(
    'search-results-label__list d-none',
  );

  const pagination = paginate(peopleData);

  useEffect(() => {
    if (peopleData.length > 1) setLabelClassName('search-results-label__list');
  }, [peopleData]);

  return (
    <>
      <ul className={labelClassName}>
        <li className="search-results-label__element">Name</li>
        <li className="search-results-label__element">Homeland</li>
        <li className="search-results-label__element">Population</li>
      </ul>
      <ul>
        {pagination.currentCharactersPage?.map((person) => (
          <SingleResult person={person} />
        ))}
      </ul>

      <ul className="page-changing__container">
        {pagination.renderPageNumbers}
      </ul>
    </>
  );
};

export default SearchResults;
