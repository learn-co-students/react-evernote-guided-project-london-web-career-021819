import React from 'react';

const Search = (props) => {
  return (
    <div>
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Task Title"
        onChange={(event) => {props.searchInput(event)}}
      />
    </div>
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Task Body"
        onChange={(event) => {props.searchInputBody(event)}}
      />
    </div>
    </div>
  );
}

export default Search;
