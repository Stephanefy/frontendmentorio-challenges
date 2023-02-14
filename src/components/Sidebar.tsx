import React from "react";
import IconBoard from "../assets/icon-board.svg";
import Switchbuton from "./Switchbutton";
import IconHideSideBar from '../assets/icon-hide-sidebar.svg'
import IconShowSideBar from '../assets/icon-show-sidebar.svg'

type Props = {};

const Sidebar = (props: Props) => {

  const [hideSidebar, setHideSidebar] = React.useState<boolean>(false)



  return (
    <>
      <div className={`${!hideSidebar ? "basis-1/6 ease-in duration-300" : "basis-1/6 transform -translate-x-full ease-in duration-300"} bg-white h-screen z-30 border-r-2 flex flex-col justify-between`}>
        <ul className="pl-3 w-full">
        <h3 className="font-bold uppercase text-primary-gray p-3">all boards</h3>
          <li className="text-primary-gray py-3">
            <img src={IconBoard} className="inline-block mr-4" />
            <span>Platform launch</span>
          </li>
          <li className="text-primary-gray py-3">
            <img src={IconBoard} className="inline-block mr-4" />

            <span>Marketing Plan</span>
          </li>
          <li className="text-primary-gray py-3">
            <img src={IconBoard} className="inline-block mr-4" />

            <span>Roadmap</span>
          </li>
          <li className="text-primary-gray py-3">
            <img src={IconBoard} className="inline-block mr-4" />

            <span className="text-primary">+ Create New Board</span>
          </li>
        </ul>
        <div className="bg-secondary-gray w-11/12 h-12 rounded-lg mx-auto mt-auto flex justify-center ">
            <Switchbuton/>
        </div>
        <div className="pl-3 my-4">
          <img src={IconHideSideBar} alt="hide sidebar" className="inline-block mr-3" />
          <button onClick={() => setHideSidebar(true)}>
            <span className="text-primary-gray">Hide sidebar</span>
          </button>
        </div>
      </div>
 
          <div className={`absolute bottom-10 bg-primary p-6 rounded-r-full ease-in duration-300 ${!hideSidebar && "transform -translate-x-full ease-in duration-300"}`}>
            <button onClick={() => setHideSidebar(false)}>
                <img src={IconShowSideBar} style={{color: "white"}}/>
              </button>
          </div>
    
    
    </>
  );
};

export default Sidebar;
