import styled from "styled-components";
import LevelButton from "./LevelButton";
import { LevelProvider, useLevel } from "../context/LevelContext";
import useSound from "use-sound";
import selectSound from "../assets/sounds/button_select.mp3";
import buttonNavigate from "../assets/sounds/button_navigate.wav";
import { useEffect, useState } from "react";

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
  @media (max-width: 700px) {
    font-size: 3rem;
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;
const Levels = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:30px;
width  800px;
border:5px solid #F2AE2E;
border-radius:10px;
@media (max-width: 900px) {
  width  80%;
  padding:20px
}

`;
const levels = ["🤩 EASY", "😎 MEDIUM", "🥵 HARD"];
type ActiveButton = number;

const Level = () => {
  const [activeButton, setActiveButton] = useState<ActiveButton>(0);
  const [playOnSelect] = useSound(selectSound, { volume: 0.5 });
  const [playOnNavigate] = useSound(buttonNavigate, { volume: 0.5 });
  const { state, dispatch } = useLevel();

  const onKeyDown = (e: KeyboardEvent) => {
    console.log("handleKeydown");

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (e.key === "ArrowDown") {
        if (activeButton && activeButton !== 3) {
          setActiveButton((prev) => prev + 1);
        } else {
          setActiveButton(1);
          console.log(`active button initialised by 1`);
        }
      } else if (e.key === "ArrowUp") {
        if (activeButton && activeButton !== 1) {
          setActiveButton((prev) => prev - 1);
        } else {
          setActiveButton(3);
          console.log(`initialised to 3`);
        }
      }
      playOnNavigate();
    } else if (e.key === "Enter") {
      playOnSelect();
      console.log(dispatch);

      dispatch({ type: activeButton });
    }
  };

  useEffect(() => {
    console.log("useEffect");

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeButton]);

  return (
    <Container>
      <Tittle>Coose Your Level</Tittle>
      <Levels>
        {levels.map((item, index) => {
          return (
            <LevelButton
              key={index}
              name={item}
              index={index}
              activeButton={activeButton}
              playOnNavigate={playOnNavigate}
              playOnSelect={playOnSelect}
            />
          );
        })}
      </Levels>
    </Container>
  );
};

export default Level;
