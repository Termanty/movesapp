import React from "react";

const DanceMoveCard = (props) => {
  console.log(props);
  return (
    <div>
      <p>Toimiiko</p>
      <p>{props.move}</p>
      <p>{props.creator}</p>
      <p>{props.info}</p>
    </div>
  );
};

export default DanceMoveCard;
