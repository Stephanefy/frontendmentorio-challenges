import { FC, useState, useRef } from 'react'
import Transition from 'react-transition-group'
import BasicInfoInputs1 from './BasicInfoInputs1';
import BasicInfoInputs2 from './BasicInfoInputs2';
import JobDetailsInputs from './JobDetailsInputs';
import JobDetailsInputs2 from './JobDetailsInputs2';
import JobDetailsInput3 from './JobDetailsInput3';

interface Props {
    step: number
}

const FormIndex: FC<Props> = ({step} : Props): JSX.Element => {

 

    return (
        <form className='w-full flex flex-col items-start justify-center overflow-auto mb-5 h-3/4'>
  
            {step === 1 ? <BasicInfoInputs1 step={step} /> : null}
            {step === 2 ? <BasicInfoInputs2 step={step} /> : null}
            {step === 3 ? <JobDetailsInputs step={step} /> : null}
            {step === 4 ? <JobDetailsInputs2 step={step} /> : null}
            {step === 5 ? <JobDetailsInput3 step={step} /> : null}

        </form>
    )
}

export default FormIndex
