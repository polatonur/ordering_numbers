import { createContext, useContext, useState } from "react";
type IsOverType = {
  isTimerOver: boolean;
  setIsTimerOver: React.Dispatch<React.SetStateAction<boolean>>;
};
const RemainingTimeContext = createContext<IsOverType | null>(null);

type Props = {
  children: React.ReactNode;
};
const IsOverProvider = (props: Props) => {
  const [isTimerOver, setIsTimerOver] = useState(false);
  console.log("isOverCalled");
  console.log(isTimerOver);

  const value = { isTimerOver, setIsTimerOver };
  return <RemainingTimeContext.Provider value={value} {...props} />;
};

const useIsover = () => {
  const context = useContext(RemainingTimeContext);
  if (!context) {
    throw new Error("This hook must be used inside a isoverProvider");
  }

  return context;
};

export { useIsover, IsOverProvider };
