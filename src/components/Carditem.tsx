import { useContext } from "react";
import { JobContext } from "../context/Jobcontext"
import { useNavigate } from "react-router-dom";

type CardItemProps = {
  card : {
    id: number,
    company: string
    logo: string,
    logoBackground: string,
    position: string,
    postedAt: string,
    contract: string,
    location: string,
  }
}

function Carditem({card}: CardItemProps) {


  const context = useContext(JobContext)
  const navigate = useNavigate()

  const handleNavigateToDetail = (id: number) => {
    console.log("it's working")
    navigate(`/${id}`)
  }


  return (
    <li 
    className="relative w-full lg:w-[350px] md:h-[228px] mt-16 py-8 px-4 lg:px-8 bg-white rounded-xl cursor-pointer dark:bg-app-very-black-blue"
    onClick={() => handleNavigateToDetail(card.id)}
    >
      <div className="absolute w-[50px] h-[50px] -top-6 grid place-items-center rounded-2xl" style={{backgroundColor: card.logoBackground}}>
        <img src={`${card.logo}`} alt="logo" />
      </div>
      <div className="mt-2 mb-2">
        <span className="text-app-gray">{card.postedAt}</span>
        <span className="text-app-gray mx-2 text-6xl">.</span>
        <span className="text-app-gray">{card.contract}</span>
      </div>
      <div className="mb-2">
        <h3 className="font-semibold dark:text-white">{card.position}</h3>
      </div>
      <div>
        <span className="text-app-gray ">{card.company}</span>
      </div>
      <div className="mt-8">
        <span className="text-app-violet">{card.location}</span>
      </div>
    </li>
  )
}

export default Carditem