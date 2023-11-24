import React, { useState } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex my-4 justify-center items-center">
      <button
        className="w-10 h-10   bg-white border-2 border-gray-200"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <i className="fa fa-arrow-left"></i>
      </button>
      <div className="page-numbers  ">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => {
              setCurrentPage(pageNumber);
              onPageChange(pageNumber);
            }}
            className={`${currentPage === pageNumber ? 'text_color' : ''}  border-2 border-gray-200  border-l-0 w-10 h-10`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="w-10 h-10  bg-white border-2 border-l-0 border-gray-200"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <i className="fa fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;