import React from "react";
import "./Paginator.css";

const Paginator = ({ page, setPage }) => {
  return (
    <div className="paginator">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Paginator;
