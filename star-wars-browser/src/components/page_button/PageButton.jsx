import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changePage } from '../../store/pagination/actions';

const PageButton = ({ number }) => {
  const dispatch = useDispatch();
  const handlePageButtonClick = (event) => {
    dispatch(changePage(Number(event.target.id)));
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
};

PageButton.propTypes = {
  number: PropTypes.number,
};

export default PageButton;
