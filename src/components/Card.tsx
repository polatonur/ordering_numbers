import React from "react";
import { Draggable } from "react-beautiful-dnd";
type Props = {
  number: number;
  index: number;
};
const Card = ({ number, index }: Props) => {
  return (
    <Draggable index={index} draggableId={number.toString()}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="card"
        >
          {number}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
