import { useContext } from 'react'
import Switchbutton from './Switchbutton'
import { Link } from 'react-router-dom'
import logo from '/assets/desktop/logo.svg'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    const { state } = useContext(AuthContext)
    const { logout } = useLogout()

    const location = useLocation()

    return (
        <nav
            className={`w-full flex justify-between ${
                location.pathname.includes('dashboard')
                    ? 'h-24 bg-[#5964df]'
                    : "h-40 bg-[url('/assets/desktop/bg-pattern-header.svg')] bg-no-repeat bg-cover"
            } `}
        >
            <div className="pt-8 flex justify-between w-10/12 md:w-5/6 mx-auto md:max-w-6xl">
                <div>
                    <h1>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </h1>
                </div>

                <div className="flex items-start justify-between w-3/12 h-full">
                    {state.user.id !== 0 ? (
                        <div className="hidden md:flex space-x-6">
                            <button
                                className="mb-2 mr-2 text-white hover:underline"
                                onClick={logout}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                    />
                                </svg>
                            </button>
                            <Link to="/dashboard/main">
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        width={100}
                                        height={100}
                                        className="self-center w-6 h-6 stroke-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="mr-[1.7em]">
                            <Link to="/login">
                                <button className="mb-2 mr-2 text-white hover:underline">
                                    login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="mb-2 text-white hover:underline">
                                    sign up
                                </button>
                            </Link>
                        </div>
                    )}
                    <Switchbutton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
