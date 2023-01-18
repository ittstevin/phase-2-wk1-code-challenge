import React from "react";
function SearchInput() {

  return(
  <div className="searchInput">
    <h1 className="HeaderOne">FLATRION BANK</h1>
    <input
    type="text"
    placeholder="search"
    className="SearchButton"/>
    <button >search...</button>
    <br/>
  </div>


  );
}

export default SearchInput;