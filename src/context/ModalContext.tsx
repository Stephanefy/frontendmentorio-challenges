import { createContext, Dispatch, SetStateAction, FC, useReducer} from "react";
import produce, {Draft} from 'immer'
import { Task } from "./BoardContext";


export const enum ModalActionType {
    NONEOPEN = 0,
    MOBILEMENU = 1,
    TASKDETAILS = 2,
    ADDTASK = 3,
    EDITTASK = 4,
    ADDBOARD = 5,
    EDITBOARD = 6,
    ADDCOLUMN = 7,
    DELETETASK = 8,
    DELETEBOARD = 9,
}

export interface ModalAction {
    readonly type: ModalActionType;
    readonly payload: Task;
}

export interface ModalState {
    showModal: number;
    task: Task
}


interface ModalContextInterface {
    state: number;
    dispatch?: Dispatch<SetStateAction<boolean>>
}


interface ModalContextProviderProps {
    children: React.ReactNode
}

const initialState  = {showModal: 0, task: {title: '', description: '', status: '', subtasks: []}}


export const ModalContext = createContext<{
    state: ModalState;
    dispatch: Dispatch<ModalAction>;
}>({
    state: initialState,
    dispatch: () => null,
});


const ModalReducer = produce((draft: ModalState, action: ModalAction): void => {
    switch(action.type) {
        case ModalActionType.NONEOPEN:
            draft.showModal = ModalActionType.NONEOPEN
            draft.task = {title: '', description: '', status: '', subtasks: []}
            break;
        case ModalActionType.MOBILEMENU:
            draft.showModal = ModalActionType.MOBILEMENU
            draft.task =  action.payload
            break;
        case ModalActionType.TASKDETAILS:
            draft.showModal = ModalActionType.TASKDETAILS
            draft.task =  action.payload
            break;
        case ModalActionType.ADDTASK:
            draft.showModal = ModalActionType.ADDTASK
            draft.task =  action.payload
            break;
        case ModalActionType.EDITTASK:
            draft.showModal = ModalActionType.EDITTASK
            draft.task =  action.payload
        case ModalActionType.ADDBOARD:
            draft.showModal = ModalActionType.ADDBOARD
            draft.task =  action.payload
            break;
        case ModalActionType.EDITBOARD:
            draft.showModal = ModalActionType.EDITBOARD
            draft.task =  action.payload
            break;
        case ModalActionType.ADDCOLUMN:
            draft.showModal = ModalActionType.ADDCOLUMN
            draft.task =  action.payload
            break;
        case ModalActionType.DELETETASK:
            draft.showModal = ModalActionType.DELETETASK
            draft.task =  action.payload
            break;
        case ModalActionType.DELETEBOARD:
            draft.showModal = ModalActionType.DELETEBOARD
            draft.task =  action.payload
            break;
        default:
            break;

    }
})



export const ModalContextProvider = ({ children }: ModalContextProviderProps) => {

    
    const [state, dispatch] = useReducer(ModalReducer, initialState)
    console.log('state', state)
    
    return (
        <ModalContext.Provider value={{ state, dispatch }}>
            {children}
        </ModalContext.Provider>
    )
}