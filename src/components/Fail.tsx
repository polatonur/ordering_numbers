import styled from "styled-components";
import { useLevel } from "../context/LevelContext";
import { useIsover } from "../context/RemainingTimeContext";
import initialData from "../initialData";

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
  background-color: darksalmon;
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
  @media (max-width: 650px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }
`;
const Emoji = styled.h1`
  font-size: 7rem;
  @media (max-width: 650px) {
    font-size: 5rem;
  }
`;
const Button = styled.button`
  padding: 20px;
  border-radius: 20px;
  border: none;
  background-color: red;
  color: white;
  font-size: 2rem;
  &:hover {
    opacity: 0.6;
  }
  cursor: pointer;
  margin: 20px;
  @media (max-width: 650px) {
    padding: 10px;
  }
`;
type Props = {
  setState: React.Dispatch<React.SetStateAction<any>>;
  reset: () => void;
};
const Fail = ({ setState, reset }: Props) => {
  const { state, dispatch } = useLevel();
  const { isTimerOver, setIsTimerOver } = useIsover();

  const handleClickPlayagain = () => {
    reset();
  };
  const handleClickQuit = () => {
    dispatch({ type: 0 });
  };
  return (
    <Container>
      <Message>
        <Emoji>🥺</Emoji>
        <Title>You Failed</Title>
        <div>
          {" "}
          <Button onClick={handleClickPlayagain}>Retry</Button>
          <Button onClick={handleClickQuit}>Quit</Button>
        </div>
      </Message>
    </Container>
  );
};

export default Fail;
