import { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useIsover } from "../context/RemainingTimeContext";
import { useTimer } from "../hooks/useTimer";

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
  const { timer, stop } = useTimer();
  const { setIsTimerOver } = useIsover();
  console.log("hello timer");

  useMemo(() => setIsTimerOver(false), []);

  useEffect(() => {
    if (timer === 0) {
      setIsTimerOver(true);
    }
  }, [timer]);
  const status = timer === 0 ? "Finished" : timer < 5 ? "Alert" : "Normal";
  return (
    <Container>
      <Clock onClick={() => stop()} status={status}>
        {timer}
      </Clock>
    </Container>
  );
};

export default Timer;
