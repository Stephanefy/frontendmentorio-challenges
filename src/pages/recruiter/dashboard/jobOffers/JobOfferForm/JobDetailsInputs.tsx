import { FC, ReactElement, useState, useEffect, createElement } from 'react'
import StepNavigationBtn from './StepNavigationBtn'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface Props {
    step: number,
    setStep: (step: number) => void,
    register: UseFormRegister<FieldValues>

}

const JobDetailsInputs: FC<Props> = ({ step, setStep, register }: Props): JSX.Element => {
  
  
    return (
        <>
            <div className="flex items-center justify-between my-2 w-full">
                <label>Description</label>
                <textarea
                    required
                    rows={5}
                    aria-required={true}
                    className="w-7/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                    {...register('description')}
                />
            </div>
        </>
    )
}

export default JobDetailsInputs
