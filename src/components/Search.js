import React, { Component } from "react";
import Card from "./SmallMoveCard";
import DanceMove from "./danceMoveCard";

class Search extends Component {
  state = {
    searchedKey: "",
  };

  searchInputHandler = (event) => {
    this.setState({
      searchedKey: event.target.value,
    });
  };

  render() {
    let danceFilter = this.props.dancelist.filter((searchedKey) => {
      let result;

      if (
        searchedKey.Move.toLowerCase().includes(
          this.state.searchedKey.toLowerCase()
        )
      ) {
        result = searchedKey.Move.toLowerCase().includes(
          this.state.searchedKey.toLowerCase()
        );
      } else if (
        searchedKey.Creator.toLowerCase().includes(
          this.state.searchedKey.toLowerCase()
        )
      ) {
        result = searchedKey.Creator.toLowerCase().includes(
          this.state.searchedKey.toLowerCase()
        );
      }
      return result;
    });

    let showDanceMoveCard = danceFilter.map((searchedKey) => (
      <DanceMove
        move={searchedKey.Move}
        creator={searchedKey.Creator}
        info={searchedKey.HOX}
      />
    ));

    let list = danceFilter.map((c) => (
      <Card
        onClick={showDanceMoveCard}
        id={c.Move}
        move={c.Move}
        creator={c.Creator}
      />
    ));

    return (
      <div className="search">
        <div className="searchWrapper">
          <input
            placeholder="search"
            onChange={this.searchInputHandler}
            className="searchValue" // onClick={deleteSearch}
          />
        </div>
        {list}
        <div></div>
      </div>
    );
  }
}

export default Search;
