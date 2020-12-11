import React from 'react';

import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';
import { CurrentPageContext } from '../../providers/currentPage/CurrentPageContext';

import getPeople from './getPeople';

import { useState, useContext } from 'react'




const Search = () => {

const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
const { peopleData, setPeopleData } = useContext(PeopleDataContext);

const [ typedSearchQuery, setTypedSearchRequest ] = useState('');


const handleSearchButtonSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    getPeople(typedSearchQuery, setPeopleData);
    
}

const handleSearchInputChange = (event) => {
    setTypedSearchRequest(event.target.value);

}

    return (
        <div className='search__container'>
            <form className='search__form' onSubmit={handleSearchButtonSubmit}>
                <input className ='search__input' value={typedSearchQuery} onChange={handleSearchInputChange} placeholder='search for your fav movie'/>
                <button className='search__button'/>
            </form>
        </div>
    )
}


export default Search;
