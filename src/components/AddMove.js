import React, { useState } from "react";
import SavedSuccessfully from "./SavedSuccessfully";

const AddMove = ({ getAllMoves }) => {
  const initialState = {
    Move: "",
    Creator: "",
    HOX: "",
    Link: "",
  };
  const [inputData, setInputData] = useState(initialState);
  const [showSaved, setShowSaved] = useState(false);

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const addMoveSubmitHandler = (e) => {
    e.preventDefault();
    const dataForBackend = {
      movename: inputData.Move,
      creator: inputData.Creator,
      hox: inputData.HOX,
      link: inputData.Link,
    };
    fetch("http://localhost:4000/addNew", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(dataForBackend),
    })
      .then(getAllMoves)
      .then(() => {
        setInputData(initialState);
        setShowSaved(true);
      })
      .catch((error) => console.log(error));
  };

  const addMoveForm = () => {
    return (
      <div className="addmove">
        <h3 className="addMoveHeader">Add Move</h3>
        <form className="addMoveForm" onSubmit={addMoveSubmitHandler}>
          <input
            type="text"
            name="Move"
            placeholder="Add new MOVE NAME"
            size="10"
            required
            value={inputData.Move}
            onChange={inputHandler}
          />
          <input
            type="text"
            name="Creator"
            placeholder="Add CREATOR'S NAME (optional)"
            value={inputData.Creator}
            onChange={inputHandler}
          />
          <input
            type="text"
            name="HOX"
            placeholder="Add NOTE (optional)"
            maxLength="200"
            value={inputData.HOX}
            onChange={inputHandler}
          />
          <input
            type="text"
            name="Link"
            placeholder="Add INSTAGRAM LINK (optional)"
            value={inputData.Link}
            onChange={inputHandler}
          />
          <button type="submit" className="savebutton">
            save
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      {addMoveForm()}
      {showSaved && <SavedSuccessfully reload={true} />}
    </>
  );
};

export default AddMove;
