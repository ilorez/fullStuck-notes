import React from "react";

type Props = {
  handleSearch: Function;
};

function SearchBar({ handleSearch }: Props) {
  return (
    <div className="bg-green-300">
      <h1>Search Bar</h1>
      <form onSubmit={(e) => handleSearch(e)}>
        <input type="text" name="search" />
        <button type="submit" className="border">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
