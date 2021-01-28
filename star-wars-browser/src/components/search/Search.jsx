import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../../store/pagination/actions';
import PeopleDataContext from '../../providers/peopleData/PeopleDataContext';

import getPeople from './getPeople';

const Search = () => {
  const { setPeopleData } = useContext(PeopleDataContext);
  const dispatch = useDispatch();

  const [typedSearchQuery, setTypedSearchQuery] = useState('');

  const handleSearchButtonSubmit = (event) => {
    event.preventDefault();
    dispatch(changePage(1));
    getPeople(typedSearchQuery, setPeopleData);
  };

  const handleSearchInputChange = (event) => {
    setTypedSearchQuery(event.target.value);
  };

  return (
    <div className="search__container">
      <form className="search__form" onSubmit={handleSearchButtonSubmit}>
        <input
          className="search__input"
          value={typedSearchQuery}
          onChange={handleSearchInputChange}
          placeholder="search for your fav character"
        />
        <button
          type="button"
          className="search__button"
          aria-label="search"
        />
      </form>
    </div>
  );
};

export default Search;
