import React from "react";

export default function SearchBar() {
  return (
    <input
      id="search"
      type="search"
      placeholder="Ex. Betta splendens"
      onChange={(event) => {
        setSearch(event.target.value);
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          console.log("Click");
          searchFishAll();
        }
      }}
    />
  );
}
