import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import List from "../components/List";
import initialData from "../initialData";
import { createContext, useEffect, useMemo, useState } from "react";
import { dequal } from "dequal";
import Succes from "./Succes";
import { useTimer } from "../hooks/useTimer";
import { useIsover } from "../context/RemainingTimeContext";
import Fail from "./Fail";
import Timer from "./Timer";
import { useLevel } from "../context/LevelContext";

const Container = styled.div`
  padding: 50px;
  border-radius: 25px;
  border: 5px solid tomato;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Quit = styled.div`
  width: 50%;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

type Props = {
  setIsOrderCorrect: React.Dispatch<React.SetStateAction<boolean>>;
};

const DraggableList = ({ setIsOrderCorrect }: Props) => {
  const [state, setState] = useState(initialData());
  const { numbers, row } = state;
  const { isTimerOver, setIsTimerOver } = useIsover();

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
  };

  const handleClickQuit = () => {
    dispatch({ type: 0 });
  };

  return (
    <>
      {isOrder && isTimerOver === false ? (
        <Succes setState={setState} reset={reset} />
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
          <Timer />
          <Quit>
            <QuitButton onClick={handleClickQuit}>Quit</QuitButton>
          </Quit>
        </>
      )}
    </>
  );
};

export default DraggableList;
