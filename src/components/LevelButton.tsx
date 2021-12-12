import styled from "styled-components";
import useSound from "use-sound";
import selectSound from "../assets/sounds/button_select.mp3";
import buttonNavigate from "../assets/sounds/button_navigate.wav";
import { useEffect, useState } from "react";
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
};
const LevelButton = ({ name, index }: Props) => {
  const [activeButton, setActiveButton] = useState<null | number>(null);
  const [playOnSelect] = useSound(selectSound, { volume: 0.5 });
  const [playOnNavigate] = useSound(buttonNavigate, { volume: 0.5 });
  console.log(activeButton);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        console.log(`active button inside useEffect is ${activeButton}`);

        if (e.key === "ArrowDown") {
          if (activeButton) {
            setActiveButton(activeButton + 1);
            console.log(
              `incremnetedd  active button prev = ${activeButton} new value =  ${
                activeButton + 1
              }`
            );
          } else {
            setActiveButton(1);
            console.log(`active button initialised by 1`);
          }
        } else if (e.key === "ArrowUp") {
          if (activeButton) {
            setActiveButton(activeButton - 1);
            console.log(
              `decremneted  active button prev = ${activeButton} new value =  ${
                activeButton + 1
              }`
            );
          } else {
            setActiveButton(3);
            console.log(`initialised to 3`);
          }
        }
        playOnNavigate();
        return;
      } else {
        console.log("other");
      }
    };
    const onKeyUp = () => {};

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <Button
      isActive={activeButton === index + 1}
      onMouseOver={() => playOnNavigate()}
      onClick={() => playOnSelect()}
    >
      {name}
    </Button>
  );
};

export default LevelButton;
