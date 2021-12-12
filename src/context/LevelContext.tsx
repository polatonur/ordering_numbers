import { useContext } from "react";
import { createContext, useReducer, ReactNode, FC } from "react";

type LevelState = { level: string | null };
type Action = {
  type: "EASY" | "MEDIUM" | "HARD";
};
interface LevelContextValue {
  state: LevelState;
  dispatch: React.Dispatch<Action>;
}

const initialValue: LevelContextValue = {
  state: { level: null },
  dispatch: () => {},
};

const LevelContext = createContext(initialValue);

const levelReducer = (state: LevelState, { type }: Action) => {
  switch (type) {
    case "EASY":
      return { level: "EASY" };
    case "MEDIUM":
      return { level: "MEDIUM" };
    case "HARD":
      return { level: "HARD" };
    default:
      return state;
  }
};

interface Props {
  children?: ReactNode | undefined;
}

const LevelPRovider = (props: Props) => {
  const [state, dispatch] = useReducer(levelReducer, { level: "EASY" });
  const value = { state, dispatch };
  return (
    <LevelContext.Provider value={value}>
      {props.children}
    </LevelContext.Provider>
  );
};

const useLevel = () => {
  const context = useContext(LevelContext);
  if (!context) {
    throw new Error(`No context this hook must be used inside a provider`);
  }
  return context;
};

export { useLevel, LevelPRovider };
export type { LevelState, Action };
