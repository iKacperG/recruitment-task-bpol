import React from 'react';
import PropTypes from 'prop-types';
import getFilmProperty from './getFilmProperty';

const FilmDetailsElement = ({
  filmProperty,
  shrinkable,
  maxCharacters,
  label,
}) => (
  <li className="film-details__list-element">
    <div className="film-details__label">{label}</div>
    <div className="film-details__content">
      {getFilmProperty(filmProperty, shrinkable, maxCharacters)}
    </div>
  </li>
);

FilmDetailsElement.defaultProps = {
  filmProperty: 'film property',
  maxCharacters: 150,
  label: 'label',
};

FilmDetailsElement.propTypes = {
  filmProperty: PropTypes.string,
  shrinkable: PropTypes.bool.isRequired,
  maxCharacters: PropTypes.number,
  label: PropTypes.string,
};

export default FilmDetailsElement;
