const getFilmProperty = (filmProperty, shrinkable, maxCharacters) => {
    let letterCount = 0; 
    if(shrinkable===true){
        const filmPropertySplitted = filmProperty.split(" ");
        const filmPropertyShrinked = filmPropertySplitted.map((word)=>{
        letterCount+=word.length;

         if(letterCount<maxCharacters){
             return word;
         }})

        const filmPropertyJoined = filmPropertyShrinked.join(" ");
        return filmPropertyJoined + "(...)";

     } else return filmProperty;
}

export default getFilmProperty;