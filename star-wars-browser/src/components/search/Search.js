import React, { useState, useContext } from "react";

import { PeopleDataContext } from "../../providers/peopleData/PeopleDataContext";
import { CurrentPageContext } from "../../providers/currentPage/CurrentPageContext";

import getPeople from "./getPeople";

const Search = () => {
  const { setCurrentPage } = useContext(CurrentPageContext);
  const { setPeopleData } = useContext(PeopleDataContext);

  const [typedSearchQuery, setTypedSearchQuery] = useState("");

  const handleSearchButtonSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
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
        <button className="search__button" />
      </form>
    </div>
  );
};

export default Search;
