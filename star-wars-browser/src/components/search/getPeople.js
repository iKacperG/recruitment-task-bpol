import { SWAPI_ADDRESS } from '../../config';

const getPeople = async (typedSearchQuery, setpeople) => {
  const peopleArray = [];
  console.log('Getting data');
  let response = await fetch(
    `${SWAPI_ADDRESS}${typedSearchQuery}`,
  );
  let data = await response.json();
  peopleArray.push(data.results);

  while (data.next != null) {
    console.log('getting next page', data.next);
    // eslint-disable-next-line no-await-in-loop
    response = await fetch(data.next);
    // eslint-disable-next-line no-await-in-loop
    data = await response.json();
    peopleArray.push(data.results);
  }
  peopleArray.push(data.results);
  setpeople(peopleArray);
};

export default getPeople;
