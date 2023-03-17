import { FC } from 'react'
import FormIndex from './FormIndex'
import { useState } from 'react'

interface Props {}

const JobOfferModalContent: FC<Props> = (props): JSX.Element => {

    return (
        <div className="flex flex-col justify-between w-3/4 lg:w-full bg-white z-50 px-8 lg:px-16 pb-24 pt-12 rounded-md">
            <h3 className="text-5xl text-center mb-6">New job offer</h3>
            <FormIndex/>
        </div>
    )
}

export default JobOfferModalContent
