const getFilm = async (film, filmsData, setFilmsData) => {
    
    let response = await fetch(film);
    let data = await response.json();
    setFilmsData([...filmsData, data]);
   
}

export default getFilm;
