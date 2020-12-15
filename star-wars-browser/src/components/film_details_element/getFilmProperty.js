const getFilmProperty = (filmProperty, shrinkable, maxCharacters) => {
  let letterCount = 0;

  if (shrinkable === true) {
    const filmPropertyShrinked = filmProperty
      .split(" ")
      .map((word) => {
        letterCount += word.length;

        if (letterCount < maxCharacters) {
          return word;
        } else return null;
      })
      .join(" ");

    return filmPropertyShrinked + "(...)";
  } else return filmProperty;
};

export default getFilmProperty;
