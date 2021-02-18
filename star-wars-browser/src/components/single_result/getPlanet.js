const getPlanet = async (person, setPlanetData) => {
  const response = await fetch(person.homeworld);
  const data = await response.json();
  setPlanetData(data);
};

export default getPlanet;

// in my opinion it would be much better to use regex to take
// out the planet number but it looks like api wants to chain requests
