import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search by book name"
      className="p-2 border-2 border-black  rounded-lg w-full max-w-md"
    />
  );
};

export default SearchBar;
