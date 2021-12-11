import "./App.css";
import List from "./components/List";
import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import initialData from "./initialData";

const Container = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  background-color: skyblue;
`;
function App() {
  const { numbers, row } = initialData;

  const onDragEnd = (result: DropResult) => {
    console.log(result);
  };

  return (
    <div className="App">
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
