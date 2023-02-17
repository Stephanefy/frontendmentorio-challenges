import { useContext, useRef, useState, useEffect } from "react";
import data from "../assets/data.json";
import { BoardContext } from "../context/BoardContext";
import Kanbancard from "./Kanbancard";

type Props = {
  setSidebarHeight: (height: number) => void;
  hideSideBar: boolean;
};

const Main = (props: Props) => {
  const { state, dispatch } = useContext(BoardContext);

  const boardsListRef = useRef(null);

  const [boardsListHeight, setBoardingListHeight] = useState<number>(0);
  

  useEffect(() => {
    console.log('hide sidebar', props.hideSideBar)


    if (boardsListRef.current) {
      props.setSidebarHeight(boardsListRef?.current?.offsetHeight);

      setBoardingListHeight(boardsListRef?.current?.offsetHeight);
    }
  }, [state]);


  const { boards } = data;

  

  return (
    <div
      className={`${
        state.columns.length
          ? "basis-6/6 items-start"
          : "basis-5/6 items-center"
      } ${props.hideSideBar ? "transform -translate-x-52 ease-in duration-300" : "transform translate-x-0 ease-in duration-300"} text-5xl bg-secondary-gray flex  justify-center pl-4 pt-4 h-full
      overflow-hidden`}
      style={{
        height: state.columns.length ? `calc(${boardsListHeight}px - 40%)` : "100vh",
      }}
    >
      {/* <p className='text-lg text-primary-gray'>This board is empty create a new column to get started</p> */}
      <div className="grid grid-flow-col auto-cols-max">
        {state.columns.length > 0 ? (
          state.columns.map((column, index) => (
            <section ref={boardsListRef} className="w-64 mr-4 pb-4">
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
                <span className="inline-block ml-2">
                  ({column.tasks.length})
                </span>
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
          ))
      
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-lg text-primary-gray">
              This board is empty. Create a new column to get started.
            </p>
            <div className="mx-auto">
              <button className="bg-primary text-white rounded-full px-4 py-2 mt-4 text-base">
                + Add New Column
              </button>
            </div>
          </div>
        )}
        {
          state.columns.length > 0 ? (
            <section className="w-72 mr-4 pb-4 mt-9 bg-[#E9EFFA] flex items-center justify-center rounded-lg">
              <button className="text-lg">
                <span className="text-primary-gray">+</span>
                <span className="text-primary-gray">New Column</span>
              </button>
            </section>
          ) : null
        }
      </div>
    </div>
  );
};

export default Main;
