import { FC, ReactNode, useEffect } from 'react'
import ReactPortals from '../portals/ReactPortals'

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
        const closeOnEscapeKey = (e: { key: string }) => e.key === "Escape" ? onClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [onClose]);


    if (!isOpen) return null

    return (
        <ReactPortals wrapperId="modal-container">
            <div className='fixed flex items-center justify-center h-full z-50 inset-0 w-screen'>
                <button onClick={onClose} className='absolute right-32 top-8'>X</button>
                <div className='flex mb-12 my-auto justify-center w-[900px] h-[700px]'>{children}</div>
            </div>

        </ReactPortals>
    )
}

export default PortalModal
