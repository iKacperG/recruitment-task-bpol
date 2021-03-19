import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import RenderFilmDetails from './RenderFilmDetails';

import PersonInfoElement from '../person_info_element';
/* eslint react/prop-types: 0 */

const SingleResult = ({
  person,
  fetchFilms,
  films,
  planet,
  fetchPlanets,
  filmUrl,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const getFilmsArray = () => {
    person.films.forEach((film) => {
      if (!(film in films)) {
        fetchFilms(film);
      }
    });
  };

  const handlePersonInfoClick = () => {
    getFilmsArray();
    setIsOpened(true);
  };

  useEffect(() => {
    if (!planet) {
      fetchPlanets(person);
    }
  }, [planet, fetchPlanets]);

  if (!planet) {
    return <div>Loading ...</div>;
  }

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
        <PersonInfoElement personProperty={planet.name} />
        <PersonInfoElement personProperty={planet.population} />
      </div>
      <RenderFilmDetails
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        films={films}
        filmUrl={filmUrl}
        fetchFilms={fetchFilms}
      />
    </>
  );
};

SingleResult.defaultProps = {
  person: {},
};

SingleResult.propTypes = {
  person: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])),
};

export default SingleResult;
