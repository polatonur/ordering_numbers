import "./App.css";
import { useLevel } from "./context/LevelContext";
import Level from "./components/Level";
import DraggableList from "./components/DraggableList";
import styled from "styled-components";
import { IsOverProvider } from "./context/RemainingTimeContext";
import { useState } from "react";

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 50px;
`;

function App() {
  const context = useLevel();
  const [isOrderCorrect, setIsOrderCorrect] = useState(false);
  console.log("app render");

  return (
    <div className="app">
      {context.state.level ? (
        <>
          <IsOverProvider>
            <Title>Put Numbers In Correct Order</Title>
            <DraggableList setIsOrderCorrect={setIsOrderCorrect} />
          </IsOverProvider>
        </>
      ) : (
        <Level />
      )}
    </div>
  );
}

export default App;
