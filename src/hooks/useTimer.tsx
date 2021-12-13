import { useEffect, useRef, useState } from "react";
import { useLevel } from "../context/LevelContext";

const useTimer = () => {
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
      return 12;
    }
  };

  const [paused, setPaused] = useState(false);
  const [timer, setTimer] = useState(initialTime);
  const callRef = useRef(0);

  useEffect(() => {
    const handleTimer = () => {
      callRef.current++;
      // console.log(`step ${callRef.current}paused is ===>`, paused);

      if (paused || timer === 0) {
        clearInterval(timerInterval);
      } else if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    };
    const timerInterval = setInterval(handleTimer, 1000);
    return () => clearInterval(timerInterval);
  }, [timer, paused]);

  const stop = () => setPaused(true);

  return { timer, stop };
};

export { useTimer };
