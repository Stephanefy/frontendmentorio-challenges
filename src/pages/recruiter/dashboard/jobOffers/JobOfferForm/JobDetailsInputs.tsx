import { FC, ReactElement, useState, useEffect, createElement } from 'react'
import RequirementsAndRoleItem from './RequirementsAndRoleItem'
import { nanoid } from 'nanoid'

interface Props {
    step: number
}

const JobDetailsInputs: FC<Props> = ({ step }: Props): JSX.Element => {
    const [requirementItemArr, setNumRequirementItemArr] = useState<
        ReactElement[]
    >([<RequirementsAndRoleItem id={nanoid()} />])
    const [roleItemArr, setRoleItemArr] = useState<ReactElement[]>([
        <RequirementsAndRoleItem id={nanoid()} />,
    ])

    const [maxItemReach, setMaxItemReach] = useState<boolean>(false)

    useEffect(() => {

        console.log(roleItemArr)

        let timeOut: NodeJS.Timeout

        if (roleItemArr.length === 5 || requirementItemArr.length === 5) {
            setMaxItemReach(true)
        }

        if (roleItemArr.length < 5 || requirementItemArr.length < 5) {
            timeOut = setTimeout(() => {
                setMaxItemReach(false)
            }, 2000)
        }

        return () => {
            clearTimeout(timeOut)
        }
    }, [requirementItemArr, roleItemArr, maxItemReach])

    return (
        <>
            <div className="flex flex-col items-start justify-center w-full">
                <label>Description</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow"
                />
            </div>
            <div id="requirements" className="w-full">
                <h4 className="text-gray-200 text-3xl text-left my-2">
                    Requirements
                </h4>
                <div className="flex flex-col items-start justify-center w-full">
                    <label>Content</label>
                    <input
                        type="text"
                        required
                        aria-required={true}
                        className="w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow"
                    />
                </div>
                <div className="flex flex-col items-start justify-center w-full">
                    <label>Items</label>
                    <input
                        type="text"
                        required={false}
                        className="w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow"
                    />
                </div>
            </div>
            <div id="role" className="w-full">
                <h4 className="text-gray-200 text-3xl text-left my-2">Role</h4>
                <div className="flex flex-col items-start justify-center w-full">
                    <label>Content</label>
                    <input
                        type="text"
                        required
                        aria-required={true}
                        className="w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow"
                    />
                </div>
                <ul className="flex flex-col items-start justify-start w-full">
                    <div className="flex w-full">
                        <h4 className="text-gray-200 text-3xl text-left my-2">
                            Relevant information items to this job
                        </h4>
                        <button
                            className="ml-4"
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation()
                                if (roleItemArr.length < 5) {
                                    setRoleItemArr((prevState) => [
                                        ...prevState,
                                        <RequirementsAndRoleItem
                                            id={nanoid()}
                                            setRoleItemArr={setRoleItemArr}
                                        />,
                                    ])
                                }
                            }}
                        >
                            +
                        </button>
               
                    </div>
                    {maxItemReach ? (
                        <span className="inline-block text-red-600">
                            maximum items reached
                        </span>
                    ) : null}
                    {roleItemArr!.map((item: ReactElement, _index: number) =>
                        createElement(item.type, {
                            key: nanoid(),
                            ...item.props,
                            setRoleItemArr,
                        })
                    )}
                </ul>
            </div>
        </>
    )
}

export default JobDetailsInputs
