const getFilm = async (film, setFilmsData) => {
  let response = await fetch(film);
  let data = await response.json();
  setFilmsData((prev) => [...prev, data]);
};

export default getFilm;
