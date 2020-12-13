import React from 'react';

import getFilmProperty from './getFilmProperty';

const FilmDetailsElement = ({ filmProperty, shrinkable, maxCharacters, label }) => {
    
    
    return (
        <li className='film-details__list-element'>
            <div className='film-details__label'>{ label }</div>
            <div className='film-details__content'>{ getFilmProperty(filmProperty, shrinkable, maxCharacters) }</div>
        </li>
    )
}

export default FilmDetailsElement;
