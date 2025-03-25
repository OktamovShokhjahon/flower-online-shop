import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { styles } from "../_components/helpers";

const MyPagination = ({ totalPages = 99 }) => {
  const [currentPage, setCurrentPage] = useState(2);

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPages = () => {
    const pages = [];

    if (currentPage > 2) {
      pages.push(
        <button key={1} className="pagination-btn" onClick={() => goToPage(1)}>
          1
        </button>
      );
    }

    if (currentPage > 3) {
      pages.push(<span key="dots1">...</span>);
    }

    if (currentPage > 1) {
      pages.push(
        <button
          key={currentPage - 1}
          className="pagination-btn"
          onClick={() => goToPage(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      );
    }

    pages.push(
      <button key={currentPage} className="pagination-btn active">
        {currentPage}
      </button>
    );

    if (currentPage < totalPages) {
      pages.push(
        <button
          key={currentPage + 1}
          className="pagination-btn"
          onClick={() => goToPage(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      pages.push(<span key="dots2">...</span>);
    }

    if (currentPage < totalPages - 1) {
      pages.push(
        <button
          key={totalPages}
          className="pagination-btn"
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-2">
        <button
          className={`w-[54px] h-[54px] rounded-full flex items-center justify-center text-mainWhite bg-[#7D6064]`}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={30} />
        </button>

        {renderPages()}

        <button
          className={`w-[54px] h-[54px] rounded-full flex items-center justify-center text-mainWhite bg-[#7D6064]`}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default MyPagination;
