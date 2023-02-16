import { useReducer, createContext, ReactNode } from "react";
import data from '../assets/data.json';



export enum BoardActionKind{
    PLATFORM = "PLATFORM",
    MARKETING = "MARKETING",
    ROADMAP = "ROADMAP",
    NEWCOLUMN = "NEWCOLUMN",
}



export interface SubTask {
    title: string;
    isCompleted: boolean;
}


export interface Task {
    title: string;
    description: string;
    status: string;
    subtasks: SubTask[];
}

export interface Column {
    name: string;
    tasks: Task[];
}

export interface BoardState{
    name: string;
    columns: Column[];
}

export interface BoardAction {
    type: BoardActionKind;
    payload: BoardState;
}


interface BoardContextProviderProps {
    children: JSX.Element | JSX.Element[]
  }

const { boards } = data;

const initialState: BoardState = boards[0];

const BoardContext = createContext<{
    state: BoardState;
    dispatch: React.Dispatch<BoardAction>;
}>({
    state: initialState,
    dispatch: () => null
})




function BoardReducer (state: BoardState, action: BoardAction): BoardState {
    switch(action.type){
        case BoardActionKind.PLATFORM:
            return {
                ...state,
                name: action.payload.name,
                columns: action.payload.columns
            }
        case BoardActionKind.MARKETING:
            return {
                ...state,
                name: action.payload.name,
                columns: action.payload.columns
            }
        case BoardActionKind.ROADMAP:
            return {
                ...state,
                name: action.payload.name,
                columns: action.payload.columns
            }
        default: 
            return state
    }
}

const BoardContextProvider = ({children}: BoardContextProviderProps) => {
    const [state, dispatch] = useReducer(BoardReducer, initialState);

    return (
       <BoardContext.Provider value={{state, dispatch}}>
            {children}
       </BoardContext.Provider>
    )
}


export { BoardContextProvider, BoardContext};