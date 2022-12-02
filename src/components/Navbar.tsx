import Switchbutton from "./Switchbutton"
import { Link } from "react-router-dom"


const Navbar = () => {



  return (
    <nav className="w-full flex justify-between h-40 bg-[url('/src/assets/desktop/bg-pattern-header.svg')] bg-no-repeat bg-cover">
        <div className="pt-8 flex justify-between w-5/6 mx-auto md:max-w-6xl">
            <div>
              <Link to="/">
                <img src="/src/assets/desktop/logo.svg" alt="logo"/>
              </Link>
            </div>
            <div>
                <Switchbutton/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar