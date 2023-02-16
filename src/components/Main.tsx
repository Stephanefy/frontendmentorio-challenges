import { useContext, useRef, useState, useEffect } from "react";
import data from "../assets/data.json";
import { BoardContext } from "../context/BoardContext";
import Kanbancard from "./Kanbancard";

type Props = {};

const Main = (props: Props) => {
  const { state, dispatch } = useContext(BoardContext);

  const boardsListRef = useRef(null)

  const [boardsListHeight, setBoardingListHeight] = useState<number>(0)

  useEffect(() => {
    if (boardsListRef.current) {
      
      console.log('height of boards list',boardsListRef.current.offsetHeight)


      setBoardingListHeight(boardsListRef?.current?.offsetHeight)
    }
  }, [])

  

  console.log("state from board context", state);

  const { boards } = data;

  console.log("boards", boards)

  return (
    <div className={`basis-6/6 text-5xl bg-secondary-gray flex items-start justify-center pl-4 pt-4`}
    style={{
      height: `${boardsListHeight}px`
    }}
    >
      {/* <p className='text-lg text-primary-gray'>This board is empty create a new column to get started</p> */}
      <div className="grid grid-flow-col auto-cols-max ">
        {state.columns.map((column, index) => (
          <section ref={boardsListRef} className="w-80 mr-4 pb-4">
            <h3 className="text-primary-gray text-base">
              <span
                className={`inline-block w-4 h-4 ${
                  index === 0
                    ? "bg-todo-column"
                    : index === 1
                    ? "bg-doing-column"
                    : "bg-done-column"
                }  rounded-full mr-2`}
              ></span>
              <span>{column.name}</span>
              <span className="inline-block ml-2">({column.tasks.length})</span>
            </h3>
            <div className="flex flex-col">
              {column.tasks.map((task, index) => (
                <Kanbancard
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  subtasks={task.subtasks}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Main;
