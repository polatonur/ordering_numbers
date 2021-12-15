import styled from "styled-components";
import Confetti from "react-confetti";
import { useIsover } from "../context/RemainingTimeContext";
import { useLevel } from "../context/LevelContext";
import React, { useEffect } from "react";
import winSound from "../assets/sounds/win.wav";
import useSound from "use-sound";
import { useWindowSize } from "react-use";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgb(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const Message = styled.div`
  display: flex;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightgreen;
  width: 700px;
  padding: 50px;
  @media (max-width: 650px) {
    width: 90vw;
    padding: 20px;
  }
`;
const Title = styled.h1`
  font-size: 4em;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;
const Emoji = styled.h1`
  font-size: 7rem;
  @media (max-width: 650px) {
    font-size: 2.5rem;
  }
`;
const Button = styled.button`
  padding: 20px;
  border-radius: 20px;
  border: none;
  background-color: green;
  color: white;
  font-size: 2rem;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
  margin: 20px;
  @media (max-width: 650px) {
    padding: 10px;
    margin: 10px;
  }
`;

type Props = {
  reset: () => void;
};
const Succes = ({ reset }: Props) => {
  const { state, dispatch } = useLevel();
  const [win] = useSound(winSound, { volume: 0.5 });
  win();

  const { width, height } = useWindowSize();

  const handleClickPlayagain = () => {
    reset();
  };
  const handleClickQuit = () => {
    dispatch({ type: 0 });
  };
  return (
    <Container>
      <Confetti width={width} height={height} />
      <Message>
        <Emoji>🥳</Emoji>
        <Title>Conguratulations You Win</Title>
        <div>
          {" "}
          <Button onClick={handleClickPlayagain}>Play again</Button>
          <Button onClick={handleClickQuit}>Quit</Button>
        </div>
      </Message>
    </Container>
  );
};

export default Succes;
