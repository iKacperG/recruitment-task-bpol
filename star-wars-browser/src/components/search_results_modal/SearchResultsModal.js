import React, { useContext,useState, useEffect } from 'react';
import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';


import SingleResult from '../single_result';
import PageButton from '../page_button';
import { CurrentPageContext } from '../../providers/currentPage/CurrentPageContext';


const SearchResultsModal = () => {
    const { currentPage, setCurrentPage } = useContext(CurrentPageContext)
    const { peopleData,setPeopleData } = useContext(PeopleDataContext)
    const [characterClustersPerPage, setCharacterClustersPerPage] = useState(1)
    
    const renderCharacters =  () => {

        const indexOfLastCharacter = currentPage * characterClustersPerPage;
        const indexOfFirstCharacter = indexOfLastCharacter - characterClustersPerPage;
        const currentCharactersPage = peopleData[currentPage-1];

        const pageNumbers = [];
        for (let i = 1; i < Math.ceil(peopleData?.length / characterClustersPerPage); i++) {
            pageNumbers.push(i);
        }

        let renderPageNumbers = pageNumbers.map(number => {
            if (pageNumbers.length !== 1) {
                return <PageButton number={number} setCurrentPage={setCurrentPage}/>
            }
        });
        console.log(peopleData)
        
           
        return (
            <>
            <div>{currentCharactersPage?.map((person)=>{
                return <SingleResult person={person}/>
            })}
            </div>
            <div className='page-changing__container'>{renderPageNumbers}</div>
            </>
            )
       
            
        
        
    }
    

  return (
  <div>
      {renderCharacters()}
  </div>
  )
}

export default SearchResultsModal;
