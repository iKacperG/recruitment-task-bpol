import React from 'react';
import PageButton from '../page_button';

const Paginate = ({ peopleData }) => {
  const characterClustersPerPage = 1;
  const pageNumbers = [];

  for (
    let i = 1;
    i < Math.ceil(peopleData?.length / characterClustersPerPage);
    i += 1
  ) {
    pageNumbers.push(i);
  }
  return (
    <>
      {pageNumbers.length !== 1 && (
        pageNumbers.map((number) => <PageButton number={number} />)
      )}
    </>
  );
};

export default Paginate;
