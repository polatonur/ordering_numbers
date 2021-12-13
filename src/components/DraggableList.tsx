import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "../components/List";
import Confetti from "react-confetti";
import initialData from "../initialData";
import { useState } from "react";
import { dequal } from "dequal";

const Container = styled.div`
  padding: 50px;
  border-radius: 25px;
  border: 5px solid tomato;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DraggableList = () => {
  const [state, setState] = useState(initialData);
  const { numbers, row } = state;

  const sortedNumbers = [...numbers].sort((a, b) => a.value - b.value);
  const isOrder = dequal(numbers, sortedNumbers);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    const newList = [...numbers];
    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, numbers[source.index]);
    setState({ ...state, numbers: newList });
  };

  return (
    <>
      {isOrder && <Confetti />}
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <List key={row.id} numbers={numbers} rowId={row.id} />
        </Container>
      </DragDropContext>
    </>
  );
};

export default DraggableList;
