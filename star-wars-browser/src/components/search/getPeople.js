const getPeople = async (typedSearchQuery, setPeopleData) => {
  const peopleArray = [];

  console.log('Getting data');
  let response = await fetch(
    `https://swapi.dev/api/people/?search=${typedSearchQuery}`,
  );
  let data = await response.json();
  peopleArray.push(data.results);

  while (data.next != null) {
    console.log('getting next page', data.next);
    response = await fetch(data.next);
    data = await response.json();
    peopleArray.push(data.results);
  }
  peopleArray.push(data.results);

  setPeopleData(peopleArray);
};

export default getPeople;
