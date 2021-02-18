const getFilm = async (film, setFilmsData) => {
  const response = await fetch(film);
  const data = await response.json();
  setFilmsData((prev) => [...prev, data]);
};

export default getFilm;
