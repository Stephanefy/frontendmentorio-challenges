import { useState, useEffect } from 'react'
import FirstSteps from '../components/register-steps/FirstStep'
import SecondStep from '../components/register-steps/SecondStep'
import FourthStep from '../components/register-steps/FourthStep';
import ThirdStep from '../components/register-steps/ThirdStep';
import { useStateMachine } from 'little-state-machine';
import { updateSignUp } from '../utils/updateAction';


const SignUp = () => {

  const [step, setStep] = useState<number>(1)
  const { actions, state, getState} = useStateMachine({ updateSignUp})

  useEffect(() => {
    console.log(getState())
  }, [])


  const onStepChange = (e: any) : void => {
    if (step > 0 && step < 3) setStep(step => step + 1)

    console.log(e?.currentTarget?.innerHTML)

    if (e?.currentTarget?.innerHTML === "Job seeker") {
        setStep(3)
        actions.updateSignUp({role: 'JOB_SEEKER'})
    } 
    if (e?.currentTarget?.innerHTML === "Recruiter") {
        setStep(4)
        actions.updateSignUp({role: 'EMPLOYER'})

    }

  }

  

  return (
        <div className='h-screen w-7/12 mx-auto flex justify-center items-center'>
            {/* Employer */}
            <div 
            className='flex-col items-center w-6/12 mx-6 rounded-lg p-3 bg-app-very-black-blue dark:bg-app-light-grey'>
                <h2 className='dark:text-gray-800 text-white text-center text-2xl my-3'>Create an account </h2>
                {
                    step === 1 ? 
                    <FirstSteps 
                    onstephandler={onStepChange}
                    /> : null
                }
                {
                    step === 2 ? <SecondStep onstephandler={onStepChange}/> : null
                }
                {
                    step === 3 ? <ThirdStep/> : null
                }
                {
                    step === 4 ? <FourthStep/> : null
                }
            </div>

            {/* Jobseeker */}

        </div>
  )
}

export default SignUp