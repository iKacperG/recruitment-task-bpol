import React, {useState, useEffect, useContext} from 'react';

import { CurrentPageContext } from '../../providers/currentPage/CurrentPageContext';
import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';

import getPlanet from './getPlanet';
import getFilm from './getFilm';
import renderFilmDetails from './renderFilmDetails';

import FilmDetailsElement from '../film_details_element';
import PersonInfoElement from '../person_info_element';

const SingleResult = ({person}) => {
    const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
    const { peopleData, setPeopleData } = useContext(PeopleDataContext);

    const [ planetData, setPlanetData ] = useState("");
    const [ filmsData, setFilmsData ] = useState([]);
    const [ filmsGotLoaded, setFilmsGotLoaded ] = useState(false);
  
    const getFilmsArray = () => {
        person.films.forEach((film)=>{
        getFilm(film, filmsData, setFilmsData);
        })

    }

    const handlePersonInfoClick = () => {
        setFilmsGotLoaded(false);
        setFilmsData([]);
        getFilmsArray();
        setFilmsGotLoaded(true);
        renderFilmDetails(filmsGotLoaded,filmsData);  
        
    }

useEffect(()=>{
    getPlanet(person, setPlanetData);
},[peopleData, currentPage])

  
return  (
    <>
    <ul className='person-info__container' onClick={handlePersonInfoClick}>
        <PersonInfoElement personProperty={person.name}/>
        <PersonInfoElement personProperty={planetData.name}/>
        <PersonInfoElement personProperty={planetData.population}/>
    </ul>
    {renderFilmDetails(person.name, filmsGotLoaded, filmsData)}
    </>
)}

export default SingleResult;
