import React from "react";

export const Search = ({
  resultsCount,
  submittedSearchTerm,
  searchTerm,
  handleChange,
  handleSubmit,
}) => {
  return (
    <section className="search-container">
      <div className="container flex column align-center">
        <h2 className="title">Nearby Myndlift Providers</h2>
        <form
          className="search-form flex align-center wrap"
          onSubmit={handleSubmit}
        >
          <input
            autoComplete="off"
            type="text"
            name="term"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search by city, state, or country"
          />
          <button>Search</button>
        </form>
        <p className="results-txt">
          {resultsCount
            ? `Showing ${resultsCount} ${
                resultsCount > 1 ? "results" : "result"
              } for "${submittedSearchTerm}"`
            : `No results for "${submittedSearchTerm}"`}
        </p>
      </div>
    </section>
  );
};
