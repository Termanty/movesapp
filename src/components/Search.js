import React from "react";
import Card from "./SmallMoveCard";
// import DanceMovePage from "./DanceMovePage";

const Search = (props) => {
  return (
    <div className="search">
      {props.searchMoves}
      <div className="searchWrapper">
        <input
          value="search"
          className="searchValue" /*onClick={deleteSearch}*/
        />
      </div>
      <div>
        {props.dancelist.map((c) => (
          <Card
            move={c.Move}
            creator={c.Creator}
            // moveCard={<DanceMovePage />}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
