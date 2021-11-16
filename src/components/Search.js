import React from "react";
import Card from "./SmallMoveCard";
import DanceList from "../db.json";

const Search = () => {
  return (
    <div className="search">
      <input value="search" />
      <div>
        {DanceList.moves.map((c) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Search;
