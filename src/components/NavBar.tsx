import React from 'react';
import data from '../../data.json';

interface NavBarProps {
  handleSelectPlanet: Function;
}


const NavBar = ({ handleSelectPlanet }: NavBarProps) => {
  


  return (
    <header className='tab mx-auto overflow-x-hidden'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center overflow-x-hidden'>
        <h2 className='text-white py-5 text-4xl uppercase'>The planets</h2>
        <ul className='flex py-5 pr-6'>
            {
                data.map((planet, i) => (
                    <li className="text-white mx-6 uppercase tracking-widest font-bold font-['league_Spartan'] cursor-pointer" onClick={() => handleSelectPlanet(i)}>{planet.name}</li>
                ))
            }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar