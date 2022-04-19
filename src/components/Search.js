import React from "react";
import "../styles/Search.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input />
        <MicIcon />
      </div>
    </div>
  );
};
export default Search;
