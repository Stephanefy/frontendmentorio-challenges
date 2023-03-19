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
            ? "basis-1/6 ease-in duration-300"
            : "basis-1/6 transform -translate-x-full ease-in duration-300"
        } bg-white z-30 border-r-2 flex flex-col justify-between pt-[96px]`}
        style={{
          height: state.columns.length
            ? `calc(25rem + (${props.sidebarHeight}px))`
            : "100vh",
        }}
      >
        <ul className="pl-3 w-full">
          <h3 className="font-bold uppercase text-primary-gray p-3">
            all boards
          </h3>
          <li className="text-primary-gray py-3">
            <button
              onClick={() =>
                dispatch({
                  type: BoardActionKind.PLATFORM,
                  payload: boards[0],
                })
              }
            >
              <img src={IconBoard} className="inline-block mr-4" />
              <span>Platform launch</span>
            </button>
          </li>
          <li className="text-primary-gray py-3">
            <button
              onClick={() =>
                dispatch({
                  type: BoardActionKind.MARKETING,
                  payload: boards[1],
                })
              }
            >
              <img src={IconBoard} className="inline-block mr-4" />
              <span>Marketing Plan</span>
            </button>
          </li>
          <li className="text-primary-gray py-3">
            <button
              onClick={() =>
                dispatch({
                  type: BoardActionKind.ROADMAP,
                  payload: boards[2],
                })
              }
            >
              <img src={IconBoard} className="inline-block mr-4" />
              <span>Roadmap</span>
            </button>
          </li>
          <li className="text-primary-gray py-3">
            <button>
              <img src={IconBoard} className="inline-block mr-4" />

              <span className="text-primary">+ Create New Board</span>
            </button>
          </li>
        </ul>
        <div className="bg-secondary-gray w-11/12 h-12 rounded-lg mx-auto mt-auto flex justify-center ">
          <Switchbuton />
        </div>
        <div className="pl-3 my-4">
          <img
            src={IconHideSideBar}
            alt="hide sidebar"
            className="inline-block mr-3"
          />
          <button onClick={() => props.setHideSidebar(true)} className="pb-2">
            <span className="text-primary-gray">Hide sidebar</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed bottom-10 bg-primary p-6 rounded-r-full ease-in duration-300 ${
          !props.hideSidebar && "transform -translate-x-full ease-in duration-300"
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
