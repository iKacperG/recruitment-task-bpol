const getFilm = async (film, filmsData, setFilmsData) => {
    
    let response = await fetch(film);
    let data = await response.json();
    setFilmsData(prev => [...prev,data]);

}

export default getFilm;
