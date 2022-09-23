
import { useState } from 'react';



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
  
interface PlanetProps {
    currentPlanet?: P,
}





export default function Planet({currentPlanet} : PlanetProps) {


    const [currentOpenedTab, setCurrentOpenedTab] = useState<number>(0)

    console.log('current opened tab', currentOpenedTab)
    
    return (

        <article className="w-full text-white h-full md:max-w-[1440px] mx-auto overflow-x-hidden">
            <section className="w-full h-auto flex flex-col lg:flex-row justify-between items-center overflow-x-hidden  gap-64 mt-24 mb-0">
                <div className="basis-5/6">
                    {
                        currentOpenedTab === 0 && (<img src={currentPlanet?.images.planet} alt={currentPlanet?.name} className="mx-auto" />)
                    }
                    {
                        currentOpenedTab === 1 && (<img src={currentPlanet?.images.internal} alt={currentPlanet?.name} className="mx-auto" />)
                    }
                    {
                        currentOpenedTab === 2 && (
                            <div className="relative h-full w-full ">
                                <img src={currentPlanet?.images.planet} alt={currentPlanet?.name} className="mx-auto" />
                                <img src={currentPlanet?.images.geology} alt={currentPlanet?.name} className="absolute top-[60%] left-[42%]" width={130} />
                            </div>
                        )
                    }
                </div>
                <div className="basis-6/6 lg:basis-4/6 flex lg:flex-col items-center justify-center lg:items-start">
                    <div className='w-4/6'>
                        <h1 className="text-6xl uppercase my-3">{currentPlanet?.name}</h1>
                        <p className="pr-32 lg:pr-0 lg:w-full my-4 ">{currentPlanet?.overview.content}</p>

                        <a href="#" className="my-8"><span className="text-custom_grey ">Source: </span>link</a>
                    </div>
                    <ul className="my-3 lg:w-4/6">
                    <li><button className={`tab w-56 lg:w-full h-[48] uppercase my-2 py-3 flex justify-between font-['league_Spartan'] font-bold tracking-wider text-[12px]`} style={{backgroundColor: `${currentOpenedTab === 0 ? currentPlanet?.color : 'transparent'}`}} onClick={() => setCurrentOpenedTab(0)}><span className='px-6'>01</span><span className='flex-1 text-left'>Overview</span></button></li>
                    <li><button className={`tab w-56 lg:w-full h-[48] uppercase my-2  py-3 flex justify-between font-['league_Spartan'] font-bold tracking-wider text-[12px]`} style={{backgroundColor: `${currentOpenedTab === 1 ? currentPlanet?.color : 'transparent'}`}} onClick={() => setCurrentOpenedTab(1)}><span className='px-6'>02</span><span className='flex-1 text-left'>Internal Structure</span></button></li>
                    <li><button className={`tab w-56 lg:w-full h-[48] uppercase my-2  py-3 flex justify-between font-['league_Spartan'] font-bold tracking-wider text-[12px]`} style={{backgroundColor: `${currentOpenedTab === 2 ? currentPlanet?.color : 'transparent'}`}} onClick={() => setCurrentOpenedTab(2)}><span className='px-6'>03</span><span className='flex-1 text-left'>Surface Geology</span></button></li>
                    </ul>
                </div>

            </section>
            <section className="w-11/12 lg:w-full flex justify-between lg:mb-24 mt-32 overflow-x-hidden px-3 mx-auto">
                <article className="planet--features border-2 border-white my-3 mx-3 p-6 pl-6 text-left w-72">
                    <h4 className="lg:text-lg">Rotation Time</h4>
                    <p className="text-2xl lg:text-4xl mt-2 uppercase">{currentPlanet?.rotation}</p>
                </article>
                <article className="planet--features border-2 border-white my-3 mx-3 p-6 pl-6 text-left w-72">
                    <h4 className="lg:text-lg">Revolution Time</h4>
                    <p className="text-2xl lg:text-4xl mt-2 uppercase">{currentPlanet?.revolution}</p>
                </article>
                <article className="planet--features border-2 border-white my-3 mx-3 p-6 pl-6 text-left w-72">
                    <h4 className="lg:text-lg">Radius</h4>
                    <p className="text-2xl lg:text-4xl mt-2 uppercase">{currentPlanet?.radius}</p>
                </article>
                <article className="planet--features border-2 border-white my-3 mx-3 p-6 pl-6 text-left w-72">
                    <h4 className="lg:text-lg">Average Temp</h4>
                    <p className="text-2xl lg:text-4xl mt-2 uppercase">{currentPlanet?.temperature}</p>
                </article>

            </section>
        </article>

    )
}