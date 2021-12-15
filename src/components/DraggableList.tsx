import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "../components/List";
import initialData from "../initialData";
import { createContext, useEffect, useMemo, useState } from "react";
import { dequal } from "dequal";
import Succes from "./Succes";
import { useIsover } from "../context/RemainingTimeContext";
import Fail from "./Fail";
import Timer from "./Timer";
import { useLevel } from "../context/LevelContext";
import useSound from "use-sound";
import tikSound from "../assets/sounds/tik.wav";

const Container = styled.div`
  padding: 50px;
  border-radius: 25px;
  border: 5px solid tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    padding: 30px;
  }
  @media (max-width: 1400px) {
    padding: 10px;
  }
  @media (max-width: 1100px) {
    width: 97vw;
  }
  @media (max-width: 650px) {
    width: max-content;
  }
`;
const Quit = styled.div`
  width: 60%;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 650px) {
    margin: 20px;
  }
`;
const QuitButton = styled.button`
  padding: 20px;
  border-radius: 30%;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    height: 50vh;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
  }
  @media (max-width: 350px) {
    height: 50vh;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
  }
`;

type Props = {
  setIsOrderCorrect: React.Dispatch<React.SetStateAction<boolean>>;
};

const DraggableList = ({ setIsOrderCorrect }: Props) => {
  const [state, setState] = useState(initialData());
  const { numbers, row } = state;
  const { isTimerOver, setIsTimerOver } = useIsover();

  const [tik] = useSound(tikSound, { volume: 0.5 });

  const reset = () => {
    setState(initialData());
    setIsTimerOver(false);
  };

  const sortedNumbers = [...numbers].sort((a, b) => a.value - b.value);
  const isOrder = dequal(numbers, sortedNumbers);

  const { dispatch } = useLevel();

  useEffect(() => {
    isOrder ? setIsOrderCorrect(true) : setIsOrderCorrect(false);
  }, [isOrder]);
  const OrderContext = createContext(isOrder);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    const newList = [...numbers];
    newList.splice(source.index, 1);
    newList.splice(destination.index, 0, numbers[source.index]);
    setState({ ...state, numbers: newList });
    tik();
  };

  const handleClickQuit = () => {
    dispatch({ type: 0 });
  };

  return (
    <Main>
      {isOrder && isTimerOver === false ? (
        <Succes reset={reset} />
      ) : isTimerOver === true ? (
        <Fail setState={setState} reset={reset} />
      ) : (
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            <Container>
              <OrderContext.Provider value={isOrder}>
                <List key={row.id} numbers={numbers} rowId={row.id} />
              </OrderContext.Provider>
            </Container>
          </DragDropContext>
          <Bottom>
            <Timer />
            <Quit>
              <QuitButton onClick={handleClickQuit}>Quit</QuitButton>
            </Quit>
          </Bottom>
        </>
      )}
    </Main>
  );
};

export default DraggableList;
