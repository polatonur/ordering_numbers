import Card from "./Card";
import initialData from "../initialData";
import { Numbers } from "../initialData";
import { Droppable } from "react-beautiful-dnd";

console.log(initialData);

interface Prosp {
  numbers: Numbers;
  rowId: string;
}

const List = ({ numbers, rowId }: Prosp) => {
  console.log(numbers);

  return (
    <Droppable droppableId={rowId} direction="horizontal">
      {(provided) => (
        <div
          className="card_list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {numbers.map((number, index) => {
            return <Card key={number} number={number} index={index} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default List;
