import React, {useState, useEffect, useContext} from 'react';
import { CurrentPageContext } from '../../providers/currentPage/CurrentPageContext';
import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';

const SingleResult = ({person}) => {
    const { currentPage, setCurrentPage } = useContext(CurrentPageContext)
    const { peopleData, setPeopleData } = useContext(PeopleDataContext)
    const [ planetData, setPlanetData ] = useState("")

// in my opinion it would be much better to use regex to take out the planet number but it looks like api wants to chain requests

    const getPlanet = async () => {
        let response = await fetch(`${person.homeworld}`)
        let data = await response.json()
        console.log(data.name)
        setPlanetData(data)
    
    }
   
    useEffect(()=>{
       getPlanet()
    },[peopleData, currentPage])

return  (
    <div className='person-info__container'>
        <div className='person-info__element'>{person.name}</div>
        <div className='person-info__element'>{planetData.name}</div>
        <div className='person-info__element'>{planetData.population}</div>
    </div>
)
    
}

export default SingleResult
