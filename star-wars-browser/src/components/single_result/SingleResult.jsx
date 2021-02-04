import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getPlanet from './getPlanet';
import getFilm from './getFilm';
import renderFilmDetails from './renderFilmDetails';

import PersonInfoElement from '../person_info_element';

const SingleResult = ({ person, pageNumber }) => {
  const [planetData, setPlanetData] = useState('');
  const [filmsData, setFilmsData] = useState([]);
  const [filmsGotLoaded, setFilmsGotLoaded] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const getFilmsArray = () => {
    person.films.forEach((film) => {
      getFilm(film, setFilmsData);
    });
  };

  const handlePersonInfoClick = () => {
    setIsOpened(false);
    setFilmsGotLoaded(false);
    setFilmsData([]);
    getFilmsArray();
    setFilmsGotLoaded(true);
    renderFilmDetails(filmsGotLoaded, filmsData, isOpened, setIsOpened);
  };

  useEffect(() => {
    getPlanet(person, setPlanetData);
  }, [person, pageNumber]);

  return (
    <>
      <div
        role="button"
        aria-label="character info"
        className="person-info__container"
        onClick={handlePersonInfoClick}
        onKeyDown={handlePersonInfoClick}
        tabIndex={-1}
      >
        <PersonInfoElement personProperty={person.name} />
        <PersonInfoElement personProperty={planetData.name} />
        <PersonInfoElement personProperty={planetData.population} />
      </div>
      {renderFilmDetails(
        person.name,
        filmsGotLoaded,
        filmsData,
        isOpened,
        setIsOpened,
      )}
    </>
  );
};

SingleResult.defaultProps = {
  person: 'person',
  pageNumber: 1,
};

SingleResult.propTypes = {
  person: PropTypes.string,
  pageNumber: PropTypes.number,
};

export default SingleResult;
