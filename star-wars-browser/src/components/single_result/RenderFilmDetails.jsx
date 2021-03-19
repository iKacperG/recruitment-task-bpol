/* eslint-disable react/prop-types */
import React from 'react';
import FilmDetailsElement from '../film_details_element';

const RenderFilmDetails = ({
  characterAttended,
  filmsGotLoaded,
  isOpened,
  setIsOpened,
  films,
}) => {
  const handleModalMaskClick = () => {
    setIsOpened(false);
  };

  const handleCloseButtonClick = () => {
    setIsOpened(false);
  };

  if (!filmsGotLoaded || !isOpened) {
    return <div />;
  }

  return (
    <>
      <ul className="film-details__list">
        <div className="ui__container">
          <span className="character-attended__span">
            {characterAttended}
            attended in
          </span>
          <button
            type="button"
            className="close__button"
            onClick={handleCloseButtonClick}
          >
            X
          </button>
        </div>
        {films.map((film) => (
          <>
            <FilmDetailsElement filmProperty={film.title} label="Title" />
            <FilmDetailsElement
              filmProperty={film.release_date}
              label="Release date"
            />
            <FilmDetailsElement
              filmProperty={film.opening_crawl}
              shrinkable={1}
              maxCharacters={130}
              label="Opening crawl"
            />
          </>
        ))}
      </ul>
      <div
        role="button"
        aria-label="close popup"
        className="modal__mask"
        onClick={handleModalMaskClick}
        onKeyDown={handleModalMaskClick}
        tabIndex={-1}
      />
    </>
  );
};

export default RenderFilmDetails;
