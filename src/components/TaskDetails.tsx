import { FC, useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import Checkbox from "./Checkbox";
import { nanoid } from "nanoid";
import { ModalActionType } from "../context/ModalContext";
import DropDown from "./Dropdown";

interface Props {}

const TaskDetails: FC<Props> = (props): JSX.Element => {

  const { state, dispatch } = useContext(ModalContext)


  // temporary fix to set id for each subtasks
  const subTasksWithId = state.task.subtasks.map((task) => ({
    id: nanoid(),
    ...task
  }))


  return (
    <div className="absolute top-64 left-1/2 w-[234px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white pr-3">
      <div className="px-4 py-4">
          <h2 className="text-primary-black font-bold">
            {state!.task!.title}
          </h2>
          <p>
            {state.task?.description ?? 'No description'}
          </p>
          <ul>
            <h3 className="text-primary-black" >Subtasks (0 /{state.task?.subtasks.length})</h3>
            {state!.task!.subtasks.length > 0 ? subTasksWithId.map(task => (
              <li key={nanoid()} className={`${task.isCompleted ? "text-primary-gray line-through" : "text-secondary-black"} font-bold bg-secondary-gray my-2 py-4 px-1 rounded-md text-sm`}>
                <Checkbox
                value={task.title}
                label={task.title}
                checked={task.isCompleted}
                onChange={() => dispatch({
                  type: ModalActionType.CHANGE_COMPPLETION,
                  payload: task.id
                })}
                />
              </li>
            )) : (<p>no subtasks</p>)
            }
          </ul>
          <p className="text-primary-gray uppercase font-bold text-xs">Current Status</p>
          <DropDown/>
      </div>
    </div>
  );
};

export default TaskDetails;
