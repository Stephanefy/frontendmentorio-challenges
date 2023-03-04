import { FC, ReactElement, useState, useEffect, createElement } from 'react'
import RequirementsAndRoleItem from './RequirementsAndRoleItem'
import { nanoid } from 'nanoid'

interface Props {
    step: number
}

const JobDetailsInputs: FC<Props> = ({ step }: Props): JSX.Element => {
  
  
    return (
        <>
            <div className="flex items-center justify-between my-2 w-full">
                <label>Description</label>
                <textarea
                    required
                    rows={8}
                    aria-required={true}
                    className="w-7/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                />
            </div>
        </>
    )
}

export default JobDetailsInputs
