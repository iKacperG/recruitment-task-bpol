import React, { useState, useEffect, useContext } from "react";

import { CurrentPageContext } from "../../providers/currentPage/CurrentPageContext";

import getPlanet from "./getPlanet";
import getFilm from "./getFilm";
import renderFilmDetails from "./renderFilmDetails";

import PersonInfoElement from "../person_info_element";

const SingleResult = ({ person }) => {
  const { currentPage } = useContext(CurrentPageContext);

  const [planetData, setPlanetData] = useState("");
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
  }, [person, currentPage]);

  return (
    <>
      <ul className="person-info__container" onClick={handlePersonInfoClick}>
        <PersonInfoElement personProperty={person.name} />
        <PersonInfoElement personProperty={planetData.name} />
        <PersonInfoElement personProperty={planetData.population} />
      </ul>
      {renderFilmDetails(
        person.name,
        filmsGotLoaded,
        filmsData,
        isOpened,
        setIsOpened
      )}
    </>
  );
};

export default SingleResult;
