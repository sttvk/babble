import React from "react";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="search-box">
      <div className="search-box-container">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default SearchBox;
