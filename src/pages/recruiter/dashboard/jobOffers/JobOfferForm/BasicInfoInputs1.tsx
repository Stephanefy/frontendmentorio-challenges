import { FC } from 'react'

interface Props {
    step: number
}

const BasicInfoInputs: FC<Props> = ({step}: Props): JSX.Element => {
    return (
        <>
        <div className='flex items-center w-full justify-between'>
            <h4 className='text-gray-200 text-3xl text-left'>Company information</h4>
            <span>step: {step}</span>

        </div>
            <div className="flex flex-col items-start justify-center w-full">
                <label className='my-2'>Company name</label>
                <input type="text" required aria-required={true} className='w-full lg:w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow' />
            </div>
            <div className="flex flex-col items-start justify-center w-full">
                <label className='my-2'>Logo</label>
                <input type="text" required aria-required={true} className='w-full lg:w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow' />
            </div>
            <div className="flex flex-col items-start justify-center w-full">
                <label className='my-2'>Logo background</label>
                <input type="text" required aria-required={true} className='w-full lg:w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow' />
            </div>
            <div className="flex flex-col items-start justify-center w-full">
                <label className='my-2'>Position</label>
                <input type="text" required aria-required={true} className='w-full lg:w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow' />
            </div>
            <div className="flex flex-col items-start justify-center w-full">
                <label className='my-2'>Contract</label>
                <input type="text" required aria-required={true} className='w-full lg:w-6/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow' />
            </div>
        </>
    )
}

export default BasicInfoInputs
