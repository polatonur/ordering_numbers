import { createContext, useContext, useState } from "react";
type IsOverType = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};
const RemainingTimeContext = createContext<IsOverType | null>(null);

type Props = {
  children: React.ReactNode;
};
const IsOverProvider = (props: Props) => {
  const [state, setState] = useState(false);
  const value = { state, setState };
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
