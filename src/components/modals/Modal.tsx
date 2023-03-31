import { FC, ReactNode, useEffect, Dispatch, useContext} from 'react'
import ReactPortals from '../portal/ReactPortal'
import { ModalAction, ModalActionType } from '../../context/ModalContext'
import { ModalContext } from '../../context/ModalContext'

interface Props {
    children: ReactNode
    isOpen: boolean
    onClose: Dispatch<ModalAction> | undefined
}

const PortalModal: FC<Props> = ({
    children,
    isOpen,
    onClose,
}: Props): JSX.Element | null => {

    const { state } = useContext(ModalContext)

    useEffect(() => {
        const closeOnEscapeKey = (e: { key: string }) =>
            e.key === 'Escape' ? onClose?.({ type: ModalActionType.NONEOPEN }) : null
        document.body.addEventListener('keydown', closeOnEscapeKey)
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey)
        }
    }, [onClose])
    
        useEffect(() => {
            console.log('mounted')
        }, [])

    if (!isOpen || state.showModal === 0) return null



    return (
        <ReactPortals wrapperId="modal-container">
                <div className={`overflow-y-auto fixed flex items-center justify-center min-h-screen inset-0 w-screen bg-gray-900 bg-opacity-50 ${state.showModal > 1 ? "z-[100]" : "Z-50" }`}>
                    {/* <button
                        onClick={() => onClose?.({ type: ModalActionType.NONEOPEN })}
                        className="absolute right-96 top-8"
                    >
                        X
                    </button> */}
                    <div className="flex mb-12 my-auto justify-center w-[900px] h-[700px] ">
                        {children}
                    </div>
                </div>
        </ReactPortals>
    )
}

export default PortalModal
