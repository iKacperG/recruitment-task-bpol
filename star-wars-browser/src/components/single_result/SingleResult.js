import React, {useState, useEffect, useContext} from 'react';
import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';

const SingleResult = ({person}) => {
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
    },[peopleData])

return  (
    <>
    <div className='test'>{person.name}</div>
    <div className='test'>{planetData.name}</div>
    <div className='test'>{planetData.population}</div>

    </>
)
    
}

export default SingleResult
