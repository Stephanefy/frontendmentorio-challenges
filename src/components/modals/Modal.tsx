import { FC, ReactNode, useEffect, Fragment } from 'react'
import ReactPortals from '../portal/ReactPortal'

interface Props {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

const PortalModal: FC<Props> = ({
    children,
    isOpen,
    onClose,
}: Props): JSX.Element | null => {
    useEffect(() => {
        const closeOnEscapeKey = (e: { key: string }) =>
            e.key === 'Escape' ? onClose() : null
        document.body.addEventListener('keydown', closeOnEscapeKey)
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey)
        }
    }, [onClose])
    
        useEffect(() => {
            console.log('mounted')
        }, [])

    if (!isOpen) return null



    return (
        <ReactPortals wrapperId="modal-container">
                <div className="fixed flex items-center justify-center h-full inset-0 w-screen bg-gray-900 bg-opacity-50 ">
                    <button
                        onClick={onClose}
                        className="absolute right-96 top-8"
                    >
                        X
                    </button>
                    <div className="flex mb-12 my-auto justify-center w-[900px] h-[700px] ">
                        {children}
                    </div>
                </div>
        </ReactPortals>
    )
}

export default PortalModal
