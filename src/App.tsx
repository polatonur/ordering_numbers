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
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 4rem;
  }
  @media (max-width: 800px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
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
