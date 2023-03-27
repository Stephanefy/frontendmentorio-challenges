import { useContext, useRef, useState, useEffect } from "react";
import data from "../assets/data.json";
import { BoardContext } from "../context/BoardContext";
import Kanbancard from "./Kanbancard";
import PortalModal from "./modals/Modal";
import { ModalContext } from '../context/ModalContext';
import MobileMenu from './MobileMenu';
import TaskDetails from "./TaskDetails";
import { nanoid } from "nanoid";

type Props = {
  setSidebarHeight: (height: number) => void;
  hideSideBar: boolean;
};

const Main = (props: Props) => {
  const { state, dispatch } = useContext(BoardContext);
  const { state: showModal, dispatch: setShowModal } = useContext(ModalContext);

  const boardsListRef = useRef<HTMLElement>(null);

  const [boardsListHeight, setBoardingListHeight] = useState<number>(0);
  

  useEffect(() => {
    console.log('hide sidebar', props.hideSideBar)


    if (boardsListRef.current) {
      props.setSidebarHeight(boardsListRef?.current?.offsetHeight);

      setBoardingListHeight(boardsListRef?.current?.offsetHeight);
    }
  }, [state]);


  const { boards } = data;

  let currentOpenModal

  // if (showModal.showModal === 1) {
  //   currentOpenModal = <MobileMenu />
  // } else if (showModal.showModal === 2) {
  //   currentOpenModal = <TaskDetails />
  // }


  // let mobileMenuisOpenModal = showModal.showModal === 1 && true
  // let taskDetailsIsOpenModal = showModal.showModal === 2 && true
  // let addTaskIsOIpen = showModal.showModal === 3 && true
  // let editTaskIsOpen = showModal.showModal === 4 && true
  // let addBoardIsOpen = showModal.showModal === 5 && true
  // let editBoardIsOpen = showModal.showModal === 6 && true
  // let addColumnIsOpen = showModal.showModal === 7 && true
  // let deleteTaskIsOpen = showModal.showModal === 8 && true
  // let deleteBoardIsOpen = showModal.showModal === 9 && true
  

  

  return (
    <>
      <div
        className={
          ` 
          ${
          state.columns.length
            ? "md:basis-5/6 items-start"
            : "md:basis-5/6 items-center"
        } ${props.hideSideBar ? "transform -translate-x-52 ease-in duration-300" : "transform translate-x-0 ease-in duration-300"} text-5xl bg-secondary-gray flex  justify-center md:pl-4 h-full
        overflow-hidden pt-[100px]`}
        style={{
          height: state.columns.length ? `calc(${boardsListHeight}px - 40%)` : "100vh",
        }}
      >
        {/* <p className='text-lg text-primary-gray'>This board is empty create a new column to get started</p> */}
        <div className={`p-4 lg:p-0 grid grid-flow-col auto-cols-max ${state.columns.length && 'overflow-auto'}`}>
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
                      id={nanoid()}
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
            <div className="w-3/4 md:w-full flex flex-col md:items-center md:justify-center mx-auto">
              <p className="text-lg text-primary-gray text-center font-bold">
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
      <PortalModal isOpen={showModal.showModal === 1} onClose={setShowModal}>
              <MobileMenu/>
      </PortalModal>
      <PortalModal isOpen={showModal.showModal === 2} onClose={setShowModal}>
          <TaskDetails />
      </PortalModal>
    </>
  );
};

export default Main;
