import React, { createContext, Dispatch, SetStateAction, useState } from "react";




interface Props {
    children: React.ReactNode
}

export const JobContext = createContext<
{currentId: number, setCurrentId: Dispatch<SetStateAction<number>>} | undefined
>(undefined)



const JobContextProvider: React.FC<Props> = ({children}) => {

    const [currentId, setCurrentId] = useState<number>(0)

    const value = {
        currentId,
        setCurrentId
    }

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>
}


export default JobContextProvider