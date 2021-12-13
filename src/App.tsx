import "./App.css";
import { useLevel } from "./context/LevelContext";
import Level from "./components/Level";
import Timer from "./components/Timer";
import DraggableList from "./components/DraggableList";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 50px;
`;

function App() {
  // const { width, height } = useWindowSize();

  const context = useLevel();
  console.log(context.state);

  return (
    <div className="app">
      {context.state.level ? (
        <>
          <Title>Put Numbers In Correct Order</Title>
          <DraggableList />
          <Timer />
        </>
      ) : (
        <Level />
      )}
    </div>
  );
}

export default App;
