import React, {useState, useEffect, useContext} from 'react';

import { CurrentPageContext } from '../../providers/currentPage/CurrentPageContext';
import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';

import getPlanet from './getPlanet';

const SingleResult = ({person}) => {
    const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
    const { peopleData, setPeopleData } = useContext(PeopleDataContext);

    const [ planetData, setPlanetData ] = useState("");
  
    useEffect(()=>{
       getPlanet(person, setPlanetData)
    },[peopleData, currentPage])

return  (
    <div className='person-info__container'>
        <div className='person-info__element'>{person.name}</div>
        <div className='person-info__element'>{planetData.name}</div>
        <div className='person-info__element'>{planetData.population}</div>
    </div>
)}

export default SingleResult;
