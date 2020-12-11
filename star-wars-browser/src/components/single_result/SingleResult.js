import React, {useState, useEffect, useContext} from 'react';

import { CurrentPageContext } from '../../providers/currentPage/CurrentPageContext';
import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';

import getPlanet from './getPlanet';
import getFilm from './getFilm';

const SingleResult = ({person}) => {
    const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
    const { peopleData, setPeopleData } = useContext(PeopleDataContext);

    const [ planetData, setPlanetData ] = useState("");
    const [ filmsData, setFilmsData ] = useState([]);
    const [ filmsAreLoaded, setFilmsAreLoaded ] = useState(false);
  
    const getFilmsArray = () => {
        setFilmsAreLoaded(false);
        person.films.forEach((film)=>{
            getFilm(film, filmsData, setFilmsData);
        })
        setFilmsAreLoaded(true);

    }

    const handlePersonInfoClick = () => {
        console.log("im in handler")
        setFilmsData([]);
        getFilmsArray();
      

    }

    

    const renderFilmDetails = () => {
        console.log(filmsData)
        return <div>{filmsData[0]?.title}</div>
    }

    useEffect(()=>{
       getPlanet(person, setPlanetData)
    },[peopleData, currentPage])

   useEffect(()=>{
    if(filmsAreLoaded == true) {
        renderFilmDetails()
        console.log("im in if")
    }
   },[filmsAreLoaded])
    

return  (
    <div className='person-info__container' onClick={handlePersonInfoClick}>
        <div className='person-info__element'>{person.name}</div>
        <div className='person-info__element'>{planetData.name}</div>
        <div className='person-info__element'>{planetData.population}</div>
        {renderFilmDetails}
    </div>
)}

export default SingleResult;
