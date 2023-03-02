import { FC, useState } from 'react'
import BasicInfoInputs1 from './BasicInfoInputs1';
import BasicInfoInputs2 from './BasicInfoInputs2';
import JobDetailsInputs from './JobDetailsInputs';

interface Props {
    step: number
}

const FormIndex: FC<Props> = ({step} : Props): JSX.Element => {



    return (
        <form className='w-full flex flex-col items-start justify-center'>
            {step === 1 ? <BasicInfoInputs1 step={step} /> : null}
            {step === 2 ? <BasicInfoInputs2 step={step} /> : null}
            {step === 3 ? <JobDetailsInputs step={step} /> : null}

        </form>
    )
}

export default FormIndex
