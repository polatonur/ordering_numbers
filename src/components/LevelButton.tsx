import styled from "styled-components";
import { PlayFunction } from "use-sound/dist/types";
import { useLevel } from "../context/LevelContext";
interface buttonProps {
  isActive: boolean;
}

const Button = styled.button<buttonProps>`
  height: 70px;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #f2ae2e;
  margin-bottom: 20px;
  width: 95%;
  cursor: pointer;
  font-size: 2rem;
  font-family: "Handlee", cursive;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: skyblue;
  }
  background-color: ${(props) => (props.isActive ? "skyblue" : "grey")};
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    padding: 5px;
  }
`;
type Props = {
  name: string;
  index: number;
  activeButton: number;
  playOnNavigate: PlayFunction;
  playOnSelect: PlayFunction;
};

const LevelButton = ({
  name,
  index,
  activeButton,
  playOnNavigate,
  playOnSelect,
}: Props) => {
  const { state, dispatch } = useLevel();

  const handleClick = () => {
    playOnSelect();
    dispatch({ type: index + 1 });
  };

  return (
    <Button
      isActive={activeButton === index + 1}
      onMouseOver={() => playOnNavigate()}
      onClick={handleClick}
    >
      {name}
    </Button>
  );
};

export default LevelButton;
function LevelContext(LevelContext: any) {
  throw new Error("Function not implemented.");
}
