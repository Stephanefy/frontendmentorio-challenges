import { FC } from 'react'

interface Props {
    step: number
}

const BasicInfoInputs2: FC<Props> = ({step}: Props): JSX.Element => {
    return (
        <>
            <div className='flex items-start justify-between my-2 w-full'>
            <h4 className='text-gray-200 text-3xl text-left'>Company information 2</h4>
            <span>step: {step}</span>

        </div>
            <div className="flex items-start justify-between my-2 w-full">
                <label className="my-2">Location</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                />
            </div>
            <div className="flex items-start justify-between my-2 w-full">
                <label className="my-2">Website</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                />
            </div>
            <div className="flex items-start justify-between my-2 w-full">
                <label className="my-2">Apply</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                />
            </div>
        </>
    )
}

export default BasicInfoInputs2
