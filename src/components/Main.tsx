import React from 'react'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className='basis-5/6 text-5xl bg-secondary-gray flex items-center justify-center '>
        <p className='text-lg text-primary-gray'>This board is empty create a new column to get started</p>
    </div>
  )
}

export default Main