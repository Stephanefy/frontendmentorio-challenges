import Switchbutton from "./Switchbutton"
import { Link } from "react-router-dom"
import logo from '/assets/desktop/logo.svg'

const Navbar = () => {



  return (
    <nav className="w-full flex justify-between h-40 bg-[url('/assets/desktop/bg-pattern-header.svg')] bg-no-repeat bg-cover">
        <div className="pt-8 flex justify-between w-5/6 mx-auto md:max-w-6xl">
            <div>
              <h1>
                <Link to="/">
                  <img src={logo} alt="logo"/>
                </Link>
              </h1>
            </div>
  
            <div className="flex items-start justify-between w-3/12">
                <div className="mr-[1.7em]">
                  <Link to="/login">
                    <button className="mb-2 mr-2 text-white hover:underline">login</button>
                  </Link>
                  <Link to="/signup">
                    <button className="mb-2 text-white hover:underline">sign up</button>  
                  </Link>
                </div>
                <Switchbutton/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar