import React, { useContext, useEffect } from "react";
import IconBoard from "../assets/icon-board.svg";
import Switchbuton from "./Switchbutton";
import IconHideSideBar from "../assets/icon-hide-sidebar.svg";
import IconShowSideBar from "../assets/icon-show-sidebar.svg";
import { BoardContext } from "../context/BoardContext";
import { BoardActionKind } from "../context/BoardContext";
import data from "../assets/data.json";

type Props = {
  sidebarHeight: number;
  setHideSidebar: (hideSidebar: boolean) => void;
  hideSidebar: boolean;
};

const Sidebar = (props: Props) => {
  const { state, dispatch } = useContext(BoardContext);

  useEffect(() => {
    console.log("state from board context", state);
  }, [state]);

  const { boards } = data;

  return (
    <>
      <div
        className={`hidden md:block ${
          !props.hideSidebar
            ? "width-[261px] duration-300 ease-in lg:basis-1/6"
            : "width-[261px] -translate-x-full transform duration-300 ease-in lg:basis-1/6"
        } z-30 flex flex-col justify-between border-r-2 bg-white
        pt-[96px]
        `}
        // style={{
        //   height: state.columns.length
        //     ? `calc(25rem + (${props.sidebarHeight}px))`
        //     : "h-screen",
        // }}
      >
        <ul className="w-full h-3/4 pl-3 flex-2">
          <h3 className="p-3 font-bold uppercase text-primary-gray">
            all boards
          </h3>
          <li className="py-3 text-primary-gray">
            <button
              onClick={() =>
                dispatch({
                  type: BoardActionKind.PLATFORM,
                  payload: boards[0],
                })
              }
            >
              <img src={IconBoard} className="mr-4 inline-block" />
              <span>Platform launch</span>
            </button>
          </li>
          <li className="py-3 text-primary-gray">
            <button
              onClick={() =>
                dispatch({
                  type: BoardActionKind.MARKETING,
                  payload: boards[1],
                })
              }
            >
              <img src={IconBoard} className="mr-4 inline-block" />
              <span>Marketing Plan</span>
            </button>
          </li>
          <li className="py-3 text-primary-gray">
            <button
              onClick={() =>
                dispatch({
                  type: BoardActionKind.ROADMAP,
                  payload: boards[2],
                })
              }
            >
              <img src={IconBoard} className="mr-4 inline-block" />
              <span>Roadmap</span>
            </button>
          </li>
          <li className="py-3 text-primary-gray">
            <button>
              <img src={IconBoard} className="mr-4 inline-block" />

              <span className="text-primary">+ Create New Board</span>
            </button>
          </li>
        </ul>
        <div className="mb-0 mt-16">
          <div className="mx-auto mt-auto flex h-12 w-11/12 justify-center rounded-lg bg-secondary-gray ">
            <Switchbuton />
          </div>
          <div className="my-4 pl-3">
            <img
              src={IconHideSideBar}
              alt="hide sidebar"
              className="mr-3 inline-block"
            />
            <button onClick={() => props.setHideSidebar(true)} className="mt-2 pb-2">
              <span className="text-primary-gray">Hide sidebar</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed bottom-10 rounded-r-full bg-primary p-6 duration-300 ease-in ${
          !props.hideSidebar &&
          "-translate-x-full transform duration-300 ease-in"
        } z-50`}
      >
        <button onClick={() => props.setHideSidebar(false)}>
          <img src={IconShowSideBar} style={{ color: "white" }} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
