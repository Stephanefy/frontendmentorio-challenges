import { useReducer, createContext, ReactNode } from "react";
import data from "../assets/data.json";
import produce, { Draft } from "immer";

export enum BoardActionKind {
  PLATFORM = "PLATFORM",
  MARKETING = "MARKETING",
  ROADMAP = "ROADMAP",
  NEWCOLUMN = "NEWCOLUMN",
}

export interface SubTask {
  readonly title: string;
  readonly isCompleted: boolean;
}

export interface Task {
  readonly title: string;
  readonly description: string;
  readonly status: string;
  readonly subtasks: readonly SubTask[];
}

export interface Column {
  readonly name: string;
  readonly tasks: readonly Task[];
}

export interface BoardState {
  name: string;
  columns: Column[];
}

export interface BoardAction {
  readonly type: BoardActionKind;
  readonly payload: BoardState;
}

interface BoardContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const { boards } = data;

const initialState: BoardState = {
    name: "",
    columns: [],
};

const BoardContext = createContext<{
  state: BoardState;
  dispatch: React.Dispatch<BoardAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const BoardReducer = produce((draft: BoardState, action: BoardAction): void => {
  switch (action.type) {
    case BoardActionKind.PLATFORM:
      (draft.name = action.payload.name),
        (draft.columns = action.payload.columns);
      break;

    case BoardActionKind.MARKETING:
      (draft.name = action.payload.name),
        (draft.columns = action.payload.columns);
      break;
    case BoardActionKind.ROADMAP:
      (draft.name = action.payload.name),
        (draft.columns = action.payload.columns);
      break;
    default:
      break;
  }
});

const BoardContextProvider = ({ children }: BoardContextProviderProps) => {
  const [state, dispatch] = useReducer(BoardReducer, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

export { BoardContextProvider, BoardContext };
