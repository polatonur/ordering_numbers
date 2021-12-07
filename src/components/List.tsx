import { useDrag } from "react-dnd";
import Card from "./Card";

// create an array 0 - 99
const numbers: number[] = Array(10)
  .fill(0)
  .map((elem, index) => index);

const List = () => {
  return (
    <div className="card_list">
      {numbers.map((number) => {
        return <Card key={number} number={number} />;
      })}
    </div>
  );
};

export default List;
