import React from "react";

const Paginator = ({ page, setPage }) => {
  return (
    <div className="text-center mt-8">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className={`bg-blue-500 text-white border-none py-2 px-4 mx-1 rounded cursor-pointer transition-colors duration-300 ${
          page === 1 ? "bg-gray-400 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
      >
        Previous
      </button>
      <span className="text-base mx-2 text-gray-800">Page {page}</span>
      <button
        onClick={() => setPage(page + 1)}
        className="bg-blue-500 text-white border-none py-2 px-4 mx-1 rounded cursor-pointer transition-colors duration-300 hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Paginator;
