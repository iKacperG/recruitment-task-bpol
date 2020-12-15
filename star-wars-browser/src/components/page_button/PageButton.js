import React from "react";

const PageButton = ({ number, setCurrentPage }) => {
  const handlePageButtonClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <li
      className="page-changing__button"
      key={number}
      id={number}
      onClick={handlePageButtonClick}
    >
      {number}
    </li>
  );
};

export default PageButton;
