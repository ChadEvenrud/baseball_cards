import React from "react";

const Card = (props) => {
  const { playersName, position, average, hits, hr } = props;
  return (
    <div>
      <h1>{playersName}</h1>
      <h2>{position}</h2>
      <h3>{average}</h3>
      <h3>{hr}</h3>
      <h3>{hits}</h3>
      <h3>{hr}</h3>
    </div>
  );
};

export default Card;
