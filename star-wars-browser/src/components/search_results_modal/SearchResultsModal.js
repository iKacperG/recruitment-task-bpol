import React, { useContext,useState, useEffect } from 'react';

import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';
import { CurrentPageContext } from '../../providers/currentPage/CurrentPageContext';

import SingleResult from '../single_result';
import paginate from './paginate';


const SearchResultsModal = () => {
    const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
    const { peopleData,setPeopleData } = useContext(PeopleDataContext);

    const pagination = paginate(currentPage, setCurrentPage, peopleData);
      
  return (
  
        <>
            <div>
                {pagination.currentCharactersPage?.map((person)=> <SingleResult person={person}/>)}
            </div>

            <div className='page-changing__container'>
                {pagination.renderPageNumbers}
            </div>
        </>
  
    )
}

export default SearchResultsModal;
