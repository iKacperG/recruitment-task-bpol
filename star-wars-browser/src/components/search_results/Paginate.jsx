import React from 'react';
import PropTypes from 'prop-types';
import PageButton from '../page_button';

const Paginate = ({ people }) => {
  const characterClustersPerPage = 1;
  const pageNumbers = [];

  for (
    let i = 1;
    i < Math.ceil(people?.length / characterClustersPerPage);
    i += 1
  ) {
    pageNumbers.push(i);
  }
  return (
    <>
      {pageNumbers.length !== 1 && (
        pageNumbers.map((number) => <PageButton number={number} key={number} />)
      )}
    </>
  );
};

Paginate.defaultProps = {
  people: [],
};

Paginate.propTypes = {
  people: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Paginate;
