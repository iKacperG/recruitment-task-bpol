import PageButton from "../page_button";

const paginate = (currentPage, setCurrentPage, peopleData) => {
  const characterClustersPerPage = 1;
  const currentCharactersPage = peopleData[currentPage - 1];
  const pageNumbers = [];

  for (
    let i = 1;
    i < Math.ceil(peopleData?.length / characterClustersPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  let renderPageNumbers = pageNumbers.map((number) => {
    if (pageNumbers.length !== 1) {
      return <PageButton number={number} setCurrentPage={setCurrentPage} />;
    } else return null;
  });

  return {
    currentCharactersPage,
    renderPageNumbers,
  };
};

export default paginate;
