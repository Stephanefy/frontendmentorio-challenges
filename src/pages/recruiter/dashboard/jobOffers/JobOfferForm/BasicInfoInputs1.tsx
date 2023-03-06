import { FC, useRef } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface Props {
    step: number,
    setStep: (step: number) => void,
    register: UseFormRegister<FieldValues>
}

const BasicInfoInputs: FC<Props> = ({ step, setStep, register }: Props): JSX.Element => {
    const nodeRef = useRef()



    

    return (
        <>
            <div className={`flex items-center w-full justify-between`}>
                <h4 className="text-gray-200 text-3xl text-left">
                    Company information
                </h4>
                <span>step: {step}</span>
            </div>
            <div className="flex items-start justify-between my-2 w-full">
                <label className="my-2">Company name</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('company')}
                />
            </div>
            <div className="flex items-start justify-between my-2 w-full">
                <label className="my-2">Logo</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('logo')}

                />
            </div>
            <div className="flex items-start justify-between my-2 w-full">
                <label className="my-2">Logo background</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('logoBackground')}

                />
            </div>
            <div className="flex items-start justify-between my-2 w-full">
                <label className="my-2">Position</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('position')}
                />
            </div>
            <div className="flex items-start justify-between my-2 w-full">
                <label className="my-2">Contract</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('contract')}
                />
            </div>
            {/* <StepNavigationBtn step={step} setStep={setStep}/> */}
   
        </>
    )
}

export default BasicInfoInputs
