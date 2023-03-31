import { useContext, useState} from "react";
import logoDark from "../assets/logo-dark.svg";
import logoMobile from "../assets/logo-mobile.svg";
import VerticalElipsis from "../assets/icon-vertical-ellipsis.svg";
import ChevronDown from "../assets/icon-chevron-down.svg";
import ChevronUp from "../assets/icon-chevron-up.svg";
import AddTaskMobile from "../assets/icon-add-task-mobile.svg";
import { ModalActionType, ModalContext } from "../context/ModalContext";

type Props = {};

const Navbar = (props: Props) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(true);
  const { state, dispatch } = useContext(ModalContext);


  const handleShowMenuModal = () => {
    
    setShowDropdown(!showDropdown);
    if(!showDropdown) dispatch({ type: ModalActionType.NONEOPEN });
    if(showDropdown) dispatch({ type: ModalActionType.MOBILEMENU });
  }


  return (
    <nav className="fixed top-0 bg-white h-[96px] flex items-center z-[60] w-full">
      <div className="pl-3 pr-6 md:width-[261px] lg:basis-1/6 flex items-center h-full md:border-r-2">
        <img className="hidden md:block" src={logoDark} alt="logo" />
        <img className="md:hidden" src={logoMobile} alt="logo" />
      </div>
      <ul className="basis-5/6 flex justify-between items-center w-full mx-auto md:px-3">
        <li className="text-primary-black text-sm md:text-1xl font-bold uppercase">
          Platform Launch
          <span className="md:hidden inline-block ml-3">
            <button
              onClick={handleShowMenuModal}
              className="flex items-center gap-x-2"
            >
              {!showDropdown ? (
                <img src={ChevronUp} width={10} />
              ) : (
                <img src={ChevronDown} width={10} />
              )}
            </button>
          </span>
        </li>
        <li>
          <div className="flex items-center justify-between gap-x-4">
            <ul className="flex items-center">
              <li className="hidden md:block">
                <button 
                onClick={() => dispatch({ type: ModalActionType.ADDTASK})}
                className="px-6 py-3 rounded-full bg-secondary">
                  +Add new task
                </button>
              </li>
              <li className="md:hidden">
                  <button 
                  onClick={() => dispatch({ type: ModalActionType.ADDTASK })}
                  className="bg-secondary w-[48px] h-[32px] rounded-full flex justify-center items-center">
                    <img src={AddTaskMobile} alt="add" />
                  </button>
              </li>
              <li className="ml-3">
                <button>
                  <img src={VerticalElipsis} alt="" />
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
