import React from "react";

const Card = (props) => {
  const { playersName } = props;
  return (
    <div>
      <h1>{playersName}</h1>
    </div>
  );
};

export default Card;
