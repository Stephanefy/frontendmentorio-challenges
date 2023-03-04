import { FC } from 'react'
import FormIndex from './JobOfferForm/FormIndex'
import { useState } from 'react'

interface Props {}

const JobOfferModalContent: FC<Props> = (props): JSX.Element => {


    const [step, setSteps] = useState<number>(1)



    return (
        <div className="flex flex-col justify-between w-full bg-white px-16 pb-24 pt-12 rounded-md">
            <h3 className="text-5xl text-center mb-6">New job offer</h3>
            <FormIndex step={step}/>
            <div className='mt-6 flex w-full justify-between'>
                {
                    step > 1 ? <button onClick={() => setSteps(step - 1)}>Previous</button> : null
                }
                {
                    step < 5 ? <button onClick={() => setSteps(step + 1)} className='ml-auto'>Next</button> : null
                }
            </div>
        </div>
    )
}

export default JobOfferModalContent
