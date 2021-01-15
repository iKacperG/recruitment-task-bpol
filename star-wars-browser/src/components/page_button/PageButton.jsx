import React from 'react';
import PropTypes from 'prop-types';

const PageButton = ({ number, setCurrentPage }) => {
  const handlePageButtonClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div
      role="button"
      aria-label="page button"
      className="page-changing__button"
      key={number}
      id={number}
      onClick={handlePageButtonClick}
      onKeyDown={handlePageButtonClick}
      tabIndex={number}
    >
      {number}
    </div>
  );
};

PageButton.defaultProps = {
  number: 1,
  setCurrentPage: () => {
    console.log('function working');
  },
};

PageButton.propTypes = {
  number: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
export default PageButton;
