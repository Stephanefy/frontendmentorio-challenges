import { FC, useState, useRef, useEffect } from 'react'
import Transition from '@headlessui/react'
import BasicInfoInputs1 from './BasicInfoInputs1'
import BasicInfoInputs2 from './BasicInfoInputs2'
import JobDetailsInputs from './JobDetailsInputs'
import JobDetailsInputs2 from './JobDetailsInputs2'
import JobDetailsInput3 from './JobDetailsInput3'
import JobDetailsRecap from './JobDetailsRecap'
import { useForm } from 'react-hook-form'
import { updateJobPost, updateRequirements, updateRole } from '../../../../../utils/updateAction';
import { useStateMachine } from 'little-state-machine'

interface Props {
}

const updateReqOrRole = (updateFn: Function, content: string, items: string[] ) => {
    updateFn({
        content,
        items
    })
}

const FormIndex: FC<Props> = (props: Props): JSX.Element => {

    const [step, setStep] = useState<number>(1)
    const [sucesss, setSuccess] = useState<boolean>(false)
    const { actions, state, getState } = useStateMachine({ updateJobPost, updateRequirements, updateRole })



    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data: any) => {
        
    
        if (step < 6 ) setStep(step + 1)
        
        const finalData = getState()

        if (step === 6) {
            console.log('dataToSend', finalData)    
            try {
                const response = await fetch('http://localhost:8000/api/jobPost', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({...finalData}),
                    credentials: 'include'
                })
                
                if (response.ok){
                    setSuccess(true)
                    sessionStorage.removeItem('__LSM__')
                }

            } catch (error) {
                
            }        
        }
    
        // check for step 4 and five of the wizard to use the proper update function
        if (step < 4) {
            actions.updateJobPost(data)
        }
        if (step === 4) {
            updateReqOrRole(actions.updateRequirements, data.content, data.items)
        } 
        if (step === 5) {
            updateReqOrRole(actions.updateRole, data.content, data.items)
        }
    }


    useEffect(() => {
        const storedFormData = sessionStorage.getItem('__LSM__')
        if (storedFormData) {
            const parsedData = JSON.parse(storedFormData)
            // check if the user has already filled the form
            actions.updateJobPost(parsedData.jobPost)
            // redirect to recap step
            setStep(6)
        }


    }, [])

    console.log('state', getState())

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-start justify-center overflow-auto mb-5 h-3/4"
        >
            {step === 1 ? (
                <BasicInfoInputs1
                    step={step}
                    setStep={setStep}
                    register={register}
                />
            ) : null}
            {step === 2 ? (
                <BasicInfoInputs2 
                    step={step} 
                    setStep={setStep}
                    register={register}
                    />
            ) : null}
            {step === 3 ? (
                <JobDetailsInputs 
                    step={step} 
                    setStep={setStep} 
                    register={register}
                    />
            ) : null}
            {step === 4 ? (
                <JobDetailsInputs2 register={register} step={step} setStep={setStep} />
            ) : null}
            {step === 5 ? (
                <JobDetailsInput3 register={register} step={step} setStep={setStep} />
            ) : null}
            {
                step > 5 ? (
                    <JobDetailsRecap/>
                ) : null
            }
            <div className="mt-6 flex w-full justify-between">
                {step > 1 ? (
                    <button type="button" onClick={() => setStep(step - 1)}>
                        Previous
                    </button>
                ) : null}
                {step <= 6 ? (
                    <button
                        type="submit"
                        className="ml-auto"
                    >
                        {step === 6 ? "Submit" : "Next"}
                    </button>
                ) : null}
            </div>
        </form>
    )
}

export default FormIndex
