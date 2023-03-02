import {
    Dispatch,
    SetStateAction,
    ReactElement,
    JSXElementConstructor,
    FC,
} from 'react'

interface Props {
    id: string
    setRoleItemArr?: Dispatch<
        SetStateAction<ReactElement<any, string | JSXElementConstructor<any>>[]>
    >
}

const RequirementsAndRoleItem: FC<Props> = (props: Props): JSX.Element => {
    return (
        <li className="flex flex-col w-full transition ease-in duration-100 justify-center h-full">
            <span>item</span>
            <div>
                <label htmlFor={props.id} className="hidden">
                    Items
                </label>
                <input
                    id={`item-${props.id}`}
                    type="text"
                    required={false}
                    className="w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow"
                />
                <button
                    className="ml-4 my-auto"
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        if (props.setRoleItemArr)
                            props.setRoleItemArr((prevState) => [
                                ...prevState].filter(element => element.props.id !== props.id)
                                )
                    }}
                >
                    -
                </button>

            </div>
        </li>
    )
}

export default RequirementsAndRoleItem
