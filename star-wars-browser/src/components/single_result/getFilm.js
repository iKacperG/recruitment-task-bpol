const getFilm = async (film, setFilms) => {
  const response = await fetch(film);
  const data = await response.json();
  setFilms((prev) => [...prev, data]);
};

export default getFilm;
