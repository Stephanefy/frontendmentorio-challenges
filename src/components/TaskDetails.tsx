import { FC } from "react";

interface Props {}

const TaskDetails: FC<Props> = (props): JSX.Element => {
  return (
    <div className="absolute top-64 left-1/2 w-[234px] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white pr-3">
        TaskDetails
    </div>
  );
};

export default TaskDetails;
