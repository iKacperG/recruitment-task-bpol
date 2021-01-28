import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import PeopleDataContext from '../../providers/peopleData/PeopleDataContext';
import SingleResult from '../single_result';
import Paginate from './Paginate';
import { getPageNumber } from '../../store/pagination/selectors';

const SearchResults = () => {
  const { peopleData } = useContext(PeopleDataContext);

  const [labelClassName, setLabelClassName] = useState(
    'search-results-label__list d-none',
  );
  const page = useSelector(getPageNumber);
  const currentCharactersPage = peopleData[page - 1];

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

export default SearchResults;
