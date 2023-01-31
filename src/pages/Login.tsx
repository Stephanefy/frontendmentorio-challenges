import { useState, useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'


const Login = () => {

  const { getState } = useStateMachine()

  useEffect(() => {
    console.log(getState())
  }, [])


  return (
    <div className='h-screen w-7/12 mx-auto flex justify-center items-center'>
        {/* Employer */}
        <form className='flex-col items-center w-6/12 mx-6 rounded-lg p-3 bg-app-very-black-blue dark:bg-app-light-grey'>
            <h2 className='dark:text-gray-800 text-white text-center text-2xl my-3'>Create an account</h2>
            {/* <FirstSteps/> */}
        </form>

        {/* Jobseeker */}
   
    </div>
  )
}

export default Login