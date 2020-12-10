import React, { useContext,useState, useEffect } from 'react';
import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';

import SingleResult from '../single_result';


const SearchResultsModal = () => {

    const { peopleData,setPeopleData } = useContext(PeopleDataContext)
   
    const renderCharacters =  () => {
        console.log(peopleData)
        
        return peopleData.map((page)=>{
        return page.map((person)=>{
                return <SingleResult person={person}/>
            })
            
        })
        
    }
    
    // .map((person)=>{
    //     return <SingleResult person={person}/>
    //     })
  return renderCharacters();
}

export default SearchResultsModal;
