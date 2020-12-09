import React from 'react'

import { useState, useContext } from 'react'

import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';

const Search = () => {
const {peopleData, setPeopleData} = useContext(PeopleDataContext);
const [typedSearchRequest, setTypedSearchRequest] = useState('');



const fetchStarWarsPeople = () => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => setPeopleData(data.results))

}

const handleSearchButtonSubmit = (event) => {
    event.preventDefault();
    fetchStarWarsPeople();

}

const handleSearchInputChange = (event) => {
    setTypedSearchRequest(event.target.value)
    
}

    return (
        <div className='search__container'>
            <form className='search__form' onSubmit={handleSearchButtonSubmit}>
                <input className ='search__input' onChange={handleSearchInputChange} placeholder='search for your fav movie'/>
                <button className='search__button'/>
            </form>
        </div>
    )
}

export default Search
