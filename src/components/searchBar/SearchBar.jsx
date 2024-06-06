import React, { useState } from "react";
import "./searchBar.scss";
import { PiMagnifyingGlassLight } from "react-icons/pi";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            onClick={() => switchType(type)}
            key={type}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input type="number" name="minPrice" min={0} placeholder="Min Price" />
        <input type="number" name="maxPrice" min={0} placeholder="Max Price" />

        <button>
          <PiMagnifyingGlassLight size={30} color="#50C878" strokeWidth={30} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
