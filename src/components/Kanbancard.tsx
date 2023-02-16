import React from 'react'
import { Column, Task, SubTask } from '../context/BoardContext'



const Kanbancard = ({title, description, status, subtasks}: Task) => {



  const subtasksCount = subtasks.reduce((acc, subtask) => {
    if(subtask.isCompleted){
      return acc + 1
    }
    return acc
  }, 0)


  console.log(subtasksCount)



  return (
    <div className="bg-white w-full rounded-lg mt-4 px-3 py-8">
    <h4 className="text-primary-black text-sm font-bold">{title}</h4>
    <p className="text-primary-gray text-sm font-bold">{subtasksCount} of {subtasks.length} subtasks</p>
  </div>
  )
}

export default Kanbancard