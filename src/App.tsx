import "./App.css";
import React, { HTMLAttributes } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import List from "./components/List";
import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import initialData from "./initialData";
import { useState } from "react";
import { dequal } from "dequal";
import { LevelProvider, useLevel } from "./context/LevelContext";
import Level from "./components/Level";

interface ContainerProps {
  isOrder: boolean;
}

const Container = styled("div")<ContainerProps>`
  border: 2px solid black;
  border-radius: 3px;
  background-color: ${(props) => (props.isOrder ? "green" : "skyblue")};
`;

function App() {
  const [state, setState] = useState(initialData);
  const { numbers, row } = state;
  const sortedNumbers = [...numbers].sort((a, b) => a.value - b.value);
  const isOrder = dequal(numbers, sortedNumbers);
  // const { width, height } = useWindowSize();

  const context = useLevel();

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
    <div className="app">
      {isOrder && <Confetti />}
      {context.state.level ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Container isOrder={isOrder}>
            <h1>Order The Numbers</h1>
            <List key={row.id} numbers={numbers} rowId={row.id} />
          </Container>
        </DragDropContext>
      ) : (
        <Level />
      )}
    </div>
  );
}

export default App;
