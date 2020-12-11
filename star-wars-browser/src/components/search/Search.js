import React from 'react'

import { useState, useContext } from 'react'

import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';

const Search = () => {
const {peopleData, setPeopleData} = useContext(PeopleDataContext);
const [typedSearchQuery, setTypedSearchRequest] = useState('');



const getPeople = async () => {
        let peopleArray = []
        console.log("Getting data")
        let response = await fetch(`https://swapi.dev/api/people/?search=${typedSearchQuery}`)
        let data = await response.json()
        while (data.next!=null){
            console.log("getting next page", data.next)
            response = await fetch(data.next)
            data = await response.json()
            peopleArray.push(data.results)

        }
        peopleArray.push(data.results)
        setPeopleData(peopleArray)
    
    }

const handleSearchButtonSubmit = (event) => {
    event.preventDefault();
    getPeople();
    
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
