import React from "react";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const array = [...new Array(pages)];

  return (
    <div className="flex justify-center align-center gap-10 my-5">
      {array.map((_, index) => (
        <button
          type="button"
          onClick={() => setCurrentPage(index + 1)}
          className={`border border-black rounded w-8 h-8 text-center pt-1 ${
            currentPage === index + 1
              ? "bg-sky-500 border-sky-500 text-white"
              : ""
          }`}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
