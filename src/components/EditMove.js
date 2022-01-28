import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SavedSuccessfully from "./SavedSuccessfully";

const baseURL = "http://localhost:3001/moves/";

const EditMove = ({ dancelist, getAllMoves }) => {
  const navigate = useNavigate();
  const params = useParams();

  const move = dancelist.find((dancemove) => dancemove.Id === +params.id);
  const startingInput = {
    Id: +params.id,
    Move: move?.Move,
    Creator: move?.Creator || "",
    HOX: move?.HOX || "",
    Link: move?.Link || "",
  };

  const [input, setInput] = useState(startingInput);
  const [showSaved, setShowSaved] = useState(false);

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  let timeoutId;
  const addEditedMove = (e) => {
    e.preventDefault();
    fetch(baseURL + input.Id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then(getAllMoves)
      .then(() => {
        timeoutId = setTimeout(() => {
          navigate("/moves/" + input.Id);
        }, 5000);
        setShowSaved(true);
      })
      .catch((error) => {
        console.log("this is the error", error);
      });
  };

  return (
    <div className="editmove">
      <div>
        <h1 className="editmove_header">Edit Move</h1>
      </div>
      <form className="editmove_form">
        <input
          type="text"
          placeholder="EDIT move name"
          className="edit_move_input"
          required
          name="Move"
          value={input.Move}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="ADD creator name"
          className="edit_move_input"
          name="Creator"
          value={input.Creator}
          onChange={inputHandler}
        />
        <input
          placeholder="ADD notes"
          className="edit_move_input"
          maxLength="25"
          name="HOX"
          value={input.HOX}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="ADD instagram link"
          className="edit_move_input"
          name="Link"
          value={input.Link}
          onChange={inputHandler}
        />
        <div>
          <button
            type="submit"
            className="saveChangesButton"
            onClick={addEditedMove}
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
      {showSaved && (
        <SavedSuccessfully path={"/moves/" + input.Id} timeoutId={timeoutId} />
      )}
    </div>
  );
};

export default EditMove;
