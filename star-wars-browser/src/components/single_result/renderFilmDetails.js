import FilmDetailsElement from '../film_details_element';

const renderFilmDetails = (characterAttended, filmsGotLoaded, filmsData, isOpened, setIsOpened) => {

    const handleModalMaskClick = () => {
        setIsOpened(true)
    }

    const handleCloseButtonClick = () => {
        setIsOpened(true);
    }

    if(filmsGotLoaded === true && !isOpened) {
        return (
            <>
            <ul className='film-details__list'>
                <div className='ui__container'>
                    <span className='character-attended__span'>{characterAttended} attended in</span>
                    <button className='close__button' onClick={handleCloseButtonClick}>X</button>

                </div>
                    {filmsData?.map((film) => {
                     return (
                         <>
                         <FilmDetailsElement filmProperty={film.title} label={'Title'}/>
                         <FilmDetailsElement filmProperty={film.release_date} label={'Release date'}/>
                         <FilmDetailsElement filmProperty={film.opening_crawl} shrinkable={true} maxCharacters={130} label={'Opening crawl'}/>
                         </>
                    )})}
            </ul>
            <div className='modal__mask' onClick={handleModalMaskClick}/>
            </>
        )
    }
}

export default renderFilmDetails;