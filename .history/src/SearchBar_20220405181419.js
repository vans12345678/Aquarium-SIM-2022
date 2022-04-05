import React from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const searchFishAll = () => {
    Axios.post("http://localhost:3001/fishComp", { search: search }).then(
      (response) => {
        setFishList(response.data);
      }
    );
  };

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
