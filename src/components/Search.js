import React, { Component } from "react";
import ListItem from "./ListItem";

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
    console.log(this.props.dancelist);

    let danceFilter = this.props.dancelist.moves.filter((dm) => {
      const key = this.state.searchedKey.toLowerCase();
      return (
        dm.Move.toLowerCase().includes(key) ||
        dm.Creator.toLowerCase().includes(key)
      );
    });

    return (
      <div className="search">
        <div className="searchWrapper">
          <input
            placeholder="search"
            onChange={this.searchInputHandler}
            className="searchValue" // onClick={deleteSearch}
          />
        </div>
        {danceFilter.map((filteredDanceMove) => (
          <ListItem
            key={filteredDanceMove.Id}
            move={filteredDanceMove.Move}
            creator={filteredDanceMove.Creator}
            Id={filteredDanceMove.Id}
            link={filteredDanceMove.Link}
          />
        ))}
      </div>
    );
  }
}

export default Search;
