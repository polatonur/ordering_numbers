import React from "react";
type Props = {
  number: number;
};
const Card = ({ number }: Props) => {
  return <div className="card">{number}</div>;
};

export default Card;
