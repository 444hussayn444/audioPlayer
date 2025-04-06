import React from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="Search-container">
      <h2 className="tit">Search For Any Band You Want To Listen To</h2>
      <div className="options">
        <input
          type="search"
          className="Search"
          placeholder="Search"
          name="search"
          id="search"
        />
        <label htmlFor="search">
          <FaSearch className="SearchIcon" />
        </label>
      </div>
    </div>
  );
};

export default Search;
