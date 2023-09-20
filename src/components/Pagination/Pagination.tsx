import React, { useContext, useState } from "react";
import { NewContext } from "../../contextApi/ContextApi.jsx";
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const { receieveData } = useContext(NewContext);

  return (
    <div className="text-center mt-5">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`btn btn-ghost bg-transparent ${
            currentPage === index + 1 ? "btn-active" : ""
          }`}
          onClick={() => setCurrentPage(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
