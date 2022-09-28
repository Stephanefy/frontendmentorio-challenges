import { useState } from 'react'
import NavBar from './components/NavBar'
import Planet from './components/Planet'
import data from '../data.json'
import './App.css'

type P = {
  name: string,
  overview: {
    content: string,
    source: string
  },
  structure: {
    content: string,
    source: string,
  },
  geology: {
    content: string,
    source: string
  },
  rotation: string,
  revolution: string,
  radius: string,
  temperature: string,
  images: {
    planet: string,
    internal: string,
    geology: string
  },
  color?: string
}

const planetColors = ['#419EBB','#EDA249',"#6f2ed6",'#D14C32','#D83A34','#CD5120','#1ec2a4', '#2d68f0'] 


const getCurrentPlanet = (planetArray: P[], index: number): P => {

  const currentPlanet = planetArray[index]
  currentPlanet['color'] = planetColors[index]
  
  console.log(currentPlanet)

  return planetArray[index]
}


function App() {
  
  const [currentPlanet, setCurrentPlanet] =  useState<P | undefined>(getCurrentPlanet(data,0))


  const handleSelectPlanet = (index: number) => {
    setCurrentPlanet(getCurrentPlanet(data, index))
    
  }


  return (
    <div className='h-auto w-full bg-[url("../assets/background-stars.svg")] bg-[#070724] overflow-x-hidden overflow-y-hidden -z-50 mx-auto'>
      <NavBar handleSelectPlanet={handleSelectPlanet} planetColors={planetColors}/>
      <main className='w-12/12 mx-auto'>
        <Planet currentPlanet={currentPlanet}/>
      </main>
    </div>
  )
}

export default App
