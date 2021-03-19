import React from 'react';
import PropTypes from 'prop-types';

const PageButton = ({ number, changePage }) => {
  const handlePageButtonClick = (event) => {
    changePage(Number(event.target.id));
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
  changePage: () => null,
};

PageButton.propTypes = {
  number: PropTypes.number,
  changePage: PropTypes.func,
};

export default PageButton;
