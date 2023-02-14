import React from "react";
import logoDark from "../assets/logo-dark.svg";
import VerticalElipsis from "../assets/icon-vertical-ellipsis.svg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-white h-[96px] flex items-center">
      <div className="px-3 basis-1/6 flex items-center h-full border-r-2">
        <img src={logoDark} alt="logo" />
      </div>
      <ul className="basis-5/6 flex justify-between items-center w-full mx-auto px-3">
        <li className="text-primary-black font-bold uppercase">Platform Launch</li>
        <li>
          <div className="flex items-center justify-between gap-x-4">
            <li>
              <button className="px-6 py-3 rounded-full bg-secondary">
                +Add new task
              </button>
            </li>
            <li>
              <button>
                <img src={VerticalElipsis} alt="" />
              </button>
            </li>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
