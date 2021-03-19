const getFilmProperty = (filmProperty, shrinkable, maxCharacters) => {
  let letterCount = 0;

  if (shrinkable) {
    const filmPropertyShrinked = filmProperty
      .split(' ')
      .map((word) => {
        letterCount += word.length;

        if (letterCount < maxCharacters) {
          return word;
        } return null;
      })
      .join(' ');

    return `${filmPropertyShrinked}(...)`;
  } return filmProperty;
};

export default getFilmProperty;
