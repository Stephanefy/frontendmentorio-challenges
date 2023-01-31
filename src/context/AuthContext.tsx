import { createContext, useReducer, ReactNode, Dispatch } from "react";


type ChildrenProps = {
    children: ReactNode
}

type User = {
    id?: number,
    email: string,
    role: string,
}

type AuthContextState = {
    user: User | null
}

export const AuthContext = createContext<{
    state: AuthContextState,
    dispatch: Dispatch<{ type: string; payload: User; }>
}>({
    state: { user: null },
    dispatch: () => null
});

export const authReducer = (state: AuthContextState, action: { type: string; payload: User; }) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload,
        }
        case "LOGOUT":
            return {
                user: null,
            }
        default: return state
    }
}


export const AuthContextProvder = ({ children } : ChildrenProps) => {
    const [state, dispatch] = useReducer(authReducer, { user: null })

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}