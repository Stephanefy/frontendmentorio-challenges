import { FC, useState, ReactElement, createElement } from 'react'
import RequirementsAndRoleItem from './RequirementsAndRoleItem'
import { nanoid } from 'nanoid'

interface Props {
    step: number
}

const JobDetailsInputs2: FC<Props> = ({ step }: Props): JSX.Element => {
    const [requirementItemArr, setNumRequirementItemArr] = useState<
        ReactElement[]
    >([<RequirementsAndRoleItem id={nanoid()} />])

    return (
        <>
            <div id="requirements" className="w-full">
                <h4 className="text-gray-200 text-2xl text-left my-2">Requirements</h4>
                <div className="flex items-center justify-between my-2 w-full">
                    <label>Content</label>
                    <textarea
                        rows={5}
                        required
                        aria-required={true}
                        className="w-7/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                    />
                </div>
                <div className="flex w-full">
                    <h4 className="text-gray-200 text-1xl text-left my-2">
                        Relevant information items to this job's requirements
                    </h4>
                    <button
                        className="ml-4"
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation()
                            if (requirementItemArr.length < 5) {
                                setNumRequirementItemArr((prevState) => [
                                    ...prevState,
                                    <RequirementsAndRoleItem
                                        id={nanoid()}
                                        setRoleItemArr={
                                            setNumRequirementItemArr
                                        }
                                    />,
                                ])
                            }
                        }}
                    >
                        +
                    </button>
                </div>
                <ul className="grid grid-cols-2 items-start justify-start w-full list-disc">
                    {requirementItemArr.length === 5 ? (
                        <span className="inline-block text-red-600">
                            maximum items reached
                        </span>
                    ) : null}
                    {requirementItemArr!.map(
                        (item: ReactElement, _index: number) =>
                            createElement(item.type, {
                                key: nanoid(),
                                ...item.props,
                                requirementItemArr,
                            })
                    )}
                    {/* <input
                        type="text"
                        required={false}
                        className="w-10/12 mx-2 my-2 rounded-md border-0 px-4 py-2 placeholder-gray-300 shadow h-2/3"
                    />
                    <input
                        type="text"
                        required={false}
                        className="w-10/12 mx-2 my-2  rounded-md border-0 px-4 py-2 placeholder-gray-300 shadow h-2/3"
                    /> */}
                </ul>
            </div>
        </>
    )
}

export default JobDetailsInputs2
