import React, { useEffect } from 'react';
import data from '../../data.json';

interface NavBarProps {
  handleSelectPlanet: Function,
  planetColors: string[]
}


const NavBar = ({ handleSelectPlanet, planetColors }: NavBarProps) => {


  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);


  useEffect(() => {
    setMobileMenuOpen(false)
  }, [handleSelectPlanet])

  const handleMobileOpen = () => {
    setMobileMenuOpen(prev => !prev);
  }
  


  return (
    <header className='tab mx-auto overflow-x-hidden'>


      <ul className={`absolute w-full h-screen mt-24 bg-[#070724] left-0 ${mobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6`}>
        {
          data.map((planet, i) => (
            <li className={`my-10 pb-6 border-b border-[#979797] mx-8 flex items-center cursor-pointer`} onClick={() => handleSelectPlanet(i)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill={`${planetColors[i]}`}/>
                </svg>
              <a className={`ml-6 text-2xl text-white hover:text-gray-500 tracking-[1.36364px]`} href="#" >{planet.name}</a></li>

          ))
        }
 
      </ul> 
  
      <nav className='hidden max-w-[1440px] mx-auto md:flex flex-col lg:flex-row justify-between items-center overflow-x-hidden' aria-label="tablet-desktop-nav">
        <h2 className='text-white py-5 text-4xl uppercase'>The planets</h2>
        <ul className='flex lg:py-5 lg:pr-6 py-6'>
            {
                data.map((planet, i) => (
                    <li className="text-white mx-3 max-w-2xl lg:mx-6 uppercase tracking-widest font-bold font-['league_Spartan'] cursor-pointer" onClick={() => handleSelectPlanet(i)}>{planet.name}</li>
                ))
            }
        </ul>
      </nav>
      <nav aria-label="mobile-nav" className='w-full flex items-center justify-between p-6'>
      <div className="basis-3/6">
        <h2 className='md:hidden text-white py-5 text-4xl uppercase'>The planets</h2>
      </div>
      <div className="md:hidden ml-auto">
        <button className="navbar-burger flex items-center text-white p-3" onClick={handleMobileOpen}>
          <svg className="block h-8 w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      </nav>
    </header>
  )
}

export default NavBar