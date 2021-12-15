import Card from "./Card";
import initialData from "../initialData";
import { Numbers } from "../initialData";
import { Droppable } from "react-beautiful-dnd";

console.log(initialData);

interface Prosp {
  numbers: Numbers;
  rowId: string;
}

const direction = () => {
  return window.innerWidth > 650 ? "horizontal" : "vertical";
};

const List = ({ numbers, rowId }: Prosp) => {
  return (
    <Droppable droppableId={rowId} direction={direction()}>
      {(provided) => (
        <div
          className="card_list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {numbers.map((number, index) => {
            return <Card key={number.id} number={number} index={index} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default List;
