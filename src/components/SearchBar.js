import React, { useState } from "react";
import "./SearchBar.css"; // Import your CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L28 28"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          ></path>
          <circle
            cx="13"
            cy="13"
            r="11"
            stroke="white"
            stroke-width="3"
          ></circle>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
