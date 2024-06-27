import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getVisiblePageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(currentPage + 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const visiblePageNumbers = getVisiblePageNumbers();

  return (
    <div className="flex justify-center space-x-1">
      <button
        className={`btn ${currentPage === 1 ? 'btn-disabled' : ''}`}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        style={{ backgroundColor: 'white' }}
      >
        ««
      </button>
      <button
        className={`btn ${currentPage === 1 ? 'btn-disabled' : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ backgroundColor: 'white' }}
      >
        «
      </button>
      {visiblePageNumbers.map((number) => (
        <button
          key={number}
          className={`btn ${number === currentPage ? 'btn-active' : ''}`}
          onClick={() => onPageChange(number)}
          style={{ backgroundColor: number === currentPage ? '' : 'white' }}
        >
          {number}
        </button>
      ))}
      <button
        className={`btn ${currentPage === totalPages ? 'btn-disabled' : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ backgroundColor: 'white' }}
      >
        »
      </button>
      <button
        className={`btn ${currentPage === totalPages ? 'btn-disabled' : ''}`}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        style={{ backgroundColor: 'white' }}
      >
        »»
      </button>
    </div>
  );
}

export default Pagination;
