import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../../store/pagination/actions';

// eslint-disable-next-line react/prop-types
const Search = ({ fetchPeople }) => {
  const dispatch = useDispatch();

  const [typedSearchQuery, setTypedSearchQuery] = useState('');

  const handleSearchButtonSubmit = (event) => {
    event.preventDefault();
    dispatch(changePage(1));
    fetchPeople();
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
