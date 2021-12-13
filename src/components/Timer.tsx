import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLevel } from "../context/LevelContext";

interface clockProps {
  status: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const Clock = styled.div<clockProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.status === "Alert"
      ? "tomato"
      : props.status === "Finished"
      ? "red"
      : "lightgreen"};
  width: 150px;
  height: 150px;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 3rem;
`;

const Timer = () => {
  const {
    state: { level },
  } = useLevel();

  //   Calculate timer
  const initialTime = () => {
    if (level === "EASY") {
      return 60;
    } else if (level === "MEDIUM") {
      return 30;
    } else {
      return 10;
    }
  };
  const [timer, setTimer] = useState(() => initialTime());

  const status = timer === 0 ? "Finished" : timer < 5 ? "Alert" : "Normal";
  useEffect(() => {
    const handleTimer = () => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    };
    const timerInterval = setInterval(handleTimer, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer]);
  return (
    <Container>
      <Clock status={status}>{timer}</Clock>
    </Container>
  );
};

export default Timer;
