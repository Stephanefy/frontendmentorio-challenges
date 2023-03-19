import { createContext, Dispatch, SetStateAction, FC, useState} from "react";


interface ModalContextInterface {
    showModal: boolean;
    setShowModal?: Dispatch<SetStateAction<boolean>>
}


interface ModalContextProviderProps {
    children: React.ReactNode
}

const defaultModalContext: ModalContextInterface = {
    showModal: false,
}

export const ModalContext = createContext<ModalContextInterface>(defaultModalContext);




export const ModalContextProvider = ({ children }: ModalContextProviderProps) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </ModalContext.Provider>
    )
}