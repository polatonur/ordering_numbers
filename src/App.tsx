import "./App.css";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import List from "./components/List";
import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import initialData from "./initialData";
import { useState } from "react";
import { dequal } from "dequal";

const Container = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  background-color: skyblue;
`;

function App() {
  const [state, setState] = useState(initialData);
  const { numbers, row } = state;
  const sortedNumbers = [...numbers].sort((a, b) => a.value - b.value);
  const isOrder = dequal(numbers, sortedNumbers);
  const { width, height } = useWindowSize();

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
    <div
      className="app"
      style={{ backgroundColor: isOrder ? "green" : "skyblue" }}
    >
      {isOrder && <Confetti />}
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <h1>Order The Numbers</h1>
          <List key={row.id} numbers={numbers} rowId={row.id} />
        </Container>
      </DragDropContext>
    </div>
  );
}

export default App;
