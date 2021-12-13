import { useContext, useMemo } from "react";
import { createContext, useReducer, ReactNode, Dispatch } from "react";

type LevelState = { level: string | null };
type Action = {
  type: number;
};
interface LevelContextValue {
  state: LevelState;
  dispatch: Dispatch<Action>;
}

const initialValue: LevelContextValue = {
  state: { level: null },
  dispatch: () => {},
};

const LevelContext = createContext(initialValue);

const levelReducer = (state: LevelState, { type }: Action) => {
  console.log(`dispatch with ${type}`);

  switch (type) {
    case 1:
      return { level: "EASY" };
    case 2:
      return { level: "MEDIUM" };
    case 3:
      return { level: "HARD" };
    case 0:
      return { level: null };
    default:
      return state;
  }
};

interface Props {
  children?: ReactNode | undefined;
}

const LevelProvider = (props: Props) => {
  const [state, dispatch] = useReducer(levelReducer, { level: null });

  const value = { state, dispatch };
  return (
    <LevelContext.Provider value={{ state, dispatch }}>
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

export { useLevel, LevelProvider };
export type { LevelState, Action };
