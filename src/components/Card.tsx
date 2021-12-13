import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Number } from "../initialData";

type Props = {
  number: Number;
  index: number;
};
const Card = ({ number, index }: Props) => {
  return (
    <Draggable index={index} draggableId={number.id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="card"
        >
          {number.value}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
