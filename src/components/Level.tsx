import styled from "styled-components";
import LevelButton from "./LevelButton";
import { LevelPRovider } from "../context/LevelContext";
import { useState } from "react";

const Container = styled.div`
  backgroun-color: grey;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Tittle = styled.h1`
  font-size: 4rem;
  margin-bottom: 50px;
`;
const Levels = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:30px;
max-width  800px;
border:5px solid #F2AE2E;
border-radius:10px
`;
const levels = ["🤩 EASY", "😎 MEDIUM", "🥵 HARD"];

const Level = () => {
  return (
    <LevelPRovider>
      <Container>
        <Tittle>Coose Your Level</Tittle>
        <Levels>
          {levels.map((item, index) => {
            return <LevelButton key={index} name={item} index={index} />;
          })}
        </Levels>
      </Container>
    </LevelPRovider>
  );
};

export default Level;
