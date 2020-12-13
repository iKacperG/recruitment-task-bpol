import React, {useState, useEffect, useContext } from 'react';

import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';
import { CurrentPageContext } from '../../providers/currentPage/CurrentPageContext';

import SingleResult from '../single_result';
import paginate from './paginate';


const SearchResults = () => {
    const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
    const { peopleData,setPeopleData } = useContext(PeopleDataContext);

    const [ labelClassName, setLabelClassName ] = useState('search-results-label__list d-none');

    const pagination = paginate(currentPage, setCurrentPage, peopleData);
      
    useEffect(() => {
        if(peopleData.length > 1) setLabelClassName('search-results-label__list'); 
    }, [peopleData])

  return (
  
        <>
            <ul className={labelClassName}>
                <li className='search-results-label__element'>Name</li>
                <li className='search-results-label__element'>Homeland</li>
                <li className='search-results-label__element'>Population</li>
            </ul>
            <ul>
                {pagination.currentCharactersPage?.map((person)=> <SingleResult person={ person }/>)}
            </ul>

            <ul className='page-changing__container'>
                {pagination.renderPageNumbers}
            </ul>
        </>
  
    )
}

export default SearchResults;
