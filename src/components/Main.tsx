import { useContext, useRef, useState, useEffect } from "react";
import data from "../assets/data.json";
import { BoardContext } from "../context/BoardContext";
import Kanbancard from "./Kanbancard";
import PortalModal from "./modals/Modal";
import { ModalContext } from "../context/ModalContext";
import MobileMenu from "./MobileMenu";
import TaskDetails from "./TaskDetails";
import { nanoid } from "nanoid";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import AddBoard from "./AddBoard";
import EditBoard from "./EditBoard";

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
    console.log("hide sidebar", props.hideSideBar);

    if (boardsListRef.current) {
      props.setSidebarHeight(boardsListRef?.current?.offsetHeight);

      setBoardingListHeight(boardsListRef?.current?.offsetHeight);
    }
  }, [state]);

  const { boards } = data;

  let currentOpenModal;

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
        className={` 
          ${
            state.columns.length
              ? "items-start md:basis-5/6"
              : "items-center md:basis-5/6"
          } ${
          props.hideSideBar
            ? "-translate-x-52 transform duration-300 ease-in"
            : "translate-x-0 transform duration-300 ease-in"
        } flex h-full justify-center  overflow-hidden bg-secondary-gray pt-[100px]
        text-5xl md:pl-4`}
        style={{
          height: state.columns.length
            ? `calc(${boardsListHeight}px - 40%)`
            : "100vh",
        }}
      >
        {/* <p className='text-lg text-primary-gray'>This board is empty create a new column to get started</p> */}
        <div
          className={`grid auto-cols-max grid-flow-col p-4 lg:p-0 ${
            state.columns.length && "overflow-auto"
          }`}
        >
          {state.columns.length > 0 ? (
            state.columns.map((column, index) => (
              <section ref={boardsListRef} className="mr-4 w-64 pb-4">
                <h3 className="text-base text-primary-gray">
                  <span
                    className={`inline-block h-4 w-4 ${
                      index === 0
                        ? "bg-todo-column"
                        : index === 1
                        ? "bg-doing-column"
                        : "bg-done-column"
                    }  mr-2 rounded-full`}
                  ></span>
                  <span>{column.name}</span>
                  <span className="ml-2 inline-block">
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
            <div className="mx-auto flex w-3/4 flex-col md:w-full md:items-center md:justify-center">
              <p className="text-center text-lg font-bold text-primary-gray">
                This board is empty. Create a new column to get started.
              </p>
              <div className="mx-auto">
                <button className="mt-4 rounded-full bg-primary px-4 py-2 text-base text-white">
                  + Add New Column
                </button>
              </div>
            </div>
          )}
          {state.columns.length > 0 ? (
            <section className="mr-4 mt-9 flex w-72 items-center justify-center rounded-lg bg-[#E9EFFA] pb-4">
              <button className="text-lg">
                <span className="text-primary-gray">+</span>
                <span className="text-primary-gray">New Column</span>
              </button>
            </section>
          ) : null}
        </div>
      </div>
      <PortalModal isOpen={showModal.showModal === 1} onClose={setShowModal}>
        <MobileMenu />
      </PortalModal>
      <PortalModal isOpen={showModal.showModal === 2} onClose={setShowModal}>
        <TaskDetails />
      </PortalModal>
      <PortalModal isOpen={showModal.showModal === 3} onClose={setShowModal}>
        <AddTask />
      </PortalModal>
      <PortalModal isOpen={showModal.showModal === 4} onClose={setShowModal}>
        <EditTask />
      </PortalModal>
      <PortalModal isOpen={showModal.showModal === 5} onClose={setShowModal}>
        <AddBoard />
      </PortalModal>
      <PortalModal isOpen={showModal.showModal === 6} onClose={setShowModal}>
        <EditBoard />
      </PortalModal>
    </>
  );
};

export default Main;
