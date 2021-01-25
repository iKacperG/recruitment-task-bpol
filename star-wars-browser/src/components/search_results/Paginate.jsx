import React from 'react';
import { useSelector } from 'react-redux';
import PageButton from '../page_button';

const paginate = (peopleData) => {
  const page = useSelector((state) => state.page);
  const characterClustersPerPage = 1;
  const currentCharactersPage = peopleData[page - 1];
  const pageNumbers = [];

  for (
    let i = 1;
    i < Math.ceil(peopleData?.length / characterClustersPerPage);
    i += 1
  ) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (pageNumbers.length !== 1) {
      return <PageButton number={number} />;
    } return null;
  });

  return {
    currentCharactersPage,
    renderPageNumbers,
  };
};

export default paginate;
