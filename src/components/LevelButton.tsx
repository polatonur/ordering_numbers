import { useContext } from "react";
import styled from "styled-components";
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
  width: 500px;
  cursor: pointer;
  font-size: 2rem;
  font-family: "Handlee", cursive;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: skyblue;
  }
  background-color: ${(props) => (props.isActive ? "skyblue" : "grey")};
`;
type Props = {
  name: string;
  index: number;
  activeButton: number;
};

const LevelButton = ({ name, index, activeButton }: Props) => {
  const context = useLevel();
  console.log("this must work");
  console.log(context);

  return (
    <Button
      isActive={activeButton === index + 1}
      //   onMouseOver={() => playOnNavigate()}
      //   onClick={() => playOnSelect()}
    >
      {name}
    </Button>
  );
};

export default LevelButton;
function LevelContext(LevelContext: any) {
  throw new Error("Function not implemented.");
}
