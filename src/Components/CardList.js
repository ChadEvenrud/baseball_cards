import React from "react";
import Card from "../Components/Card";

const CardList = (props) => {
  return props.list.map((item) => {
    return <Card playersName={item} />;
  });
};

export default CardList;
