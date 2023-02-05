import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type P = {
    name: string
    overview: {
        content: string
        source: string
    }
    structure: {
        content: string
        source: string
    }
    geology: {
        content: string
        source: string
    }
    rotation: string
    revolution: string
    radius: string
    temperature: string,
    image_width: string,
    images: {
        planet: string
        internal: string
        geology: string
    }
    color?: string
}

interface PlanetProps {
    currentPlanet?: P
}


const get_internal_svg = async (path: string) => {

    const baseurl = import.meta.env.VITE_APP_BASE_URL


    // const response = await fetch(`${import.meta.env.BASE_URL}/${path}`)

    console.log('base url', baseurl)

    // if (!response.ok) {
    //     throw response;
    // }



    // return response
}


export default function Planet({ currentPlanet }: PlanetProps) {
    const [currentOpenedTab, setCurrentOpenedTab] = useState<number>(0)
    const [internalSvg, setInternalSvg] = useState<string>('')


    useEffect(() => {
        get_internal_svg(currentPlanet!.images!.internal)
            .then((response) => console.log(response))
            .then((data) => console.log(data))
    }, [currentPlanet])


    console.log('current planet', typeof currentPlanet?.image_width)

    return (
        <article className="w-full text-white md:h-full md:max-w-[1440px] mx-auto overflow-x-hidden">
            <ul className="mobile-tab md:hidden flex my-3 justify-around w-full">
                <li
                    className="w-2/6"
                    style={{
                        borderBottom:
                            currentOpenedTab === 0
                                ? `4px solid ${currentPlanet?.color}`
                                : 'none',
                    }}
                >
                    <button
                        className={`mobile-tab-item w-full h-[48] uppercase my-2 py-3 flex justify-between font-['league_Spartan'] font-bold tracking-wider text-[12px]`}
                        onClick={() => setCurrentOpenedTab(0)}
                    >
                        <span className={`flex-1 text-center text-lg ${currentOpenedTab === 0 ? 'text-white' : 'text--grey'}`}>
                            Overview
                        </span>
                    </button>
                </li>
                <li
                    className="w-2/6"
                    style={{
                        borderBottom:
                            currentOpenedTab === 1
                                ? `4px solid ${currentPlanet?.color}`
                                : 'none',
                    }}
                >
                    <button
                        className={`w-full h-[48] uppercase my-2  py-3 flex justify-between font-['league_Spartan'] font-bold tracking-wider text-[12px]`}
                        onClick={() => setCurrentOpenedTab(1)}
                    >
                        <span className={`flex-1 text-center text-lg ${currentOpenedTab === 1 ? 'text-white' : 'text--grey'}`}>
                            Structure
                        </span>
                    </button>
                </li>
                <li
                    className="w-2/6"
                    style={{
                        borderBottom:
                            currentOpenedTab === 2
                                ? `4px solid ${currentPlanet?.color}`
                                : 'none',
                    }}
                >
                    <button
                        className={`w-full h-[48] uppercase my-2 py-3 flex justify-between font-['league_Spartan'] font-bold tracking-wider text-[12px]`}
                        onClick={() => setCurrentOpenedTab(2)}
                    >
                        <span className={`flex-1 text-center text-lg ${currentOpenedTab === 2 ? 'text-white' : 'text--grey'}`}>
                            Surface
                        </span>
                    </button>
                </li>
            </ul>
            <section className="max-w-3xl lg:max-w-full px-3 lg:w-12/12 h-auto md:h-full lg:h-[490px] mx-auto pt-36 lg:pt-0 flex flex-col my-auto lg:flex-row justify-center items-center overflow-x-hidden overflow-y-hidden -z-10 mb-12">
                <div className="basis-3/6 md:mx-auto h-auto lg:basis-4/12">
                    {currentOpenedTab === 0 ? (
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        >
                            <img
                                src={`../${currentPlanet?.images.planet}`}
                                alt={`../${currentPlanet?.name}`}
                                width="auto"
                                className='mx-auto'
                            />
                        </motion.div>
                    ) : null }
                    {currentOpenedTab === 1 ? (
                        <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='h-auto'>
                            <img
                            src={`../${currentPlanet?.images.internal}`}
                            alt={`../${currentPlanet?.name}`}
                            className='mx-auto'
                            />
                        </motion.div>
                    ) : null}
                    {currentOpenedTab === 2 ? (
                        <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-full w-full z-10">
                            <img
                                src={`../${currentPlanet?.images.planet}`}
                                alt={`../${currentPlanet?.name}`}
                                width="auto"
                                className='mx-auto'
                            />
                            <img
                                src={`../${currentPlanet?.images.geology}`}
                                alt={`../${currentPlanet?.name}`}
                                className="absolute top-[60%] left-0 right-0 mx-auto"
                                width={130}
                            />
                        </motion.div>
                    ) : null}
                </div>
                <div className="basis-6/6 lg:basis-2/6 flex lg:flex-col items-center justify-center lg:items-start">
                    <div className="w-11/12 text-center md:text-left md:w-9/12 ">
                        <h1 className="text-[80px] uppercase my-3">
                            {currentPlanet?.name}
                        </h1>
                        <p className="px-6 text-[14px] md:px-0 md:pr-32 lg:pr-0 lg:w-full my-4 font-spartan opacity-80">
                            {currentPlanet?.overview.content}
                        </p>
                        <div className="flex justify-center md:justify-start items-center gap-2">
                            <a  
                                href={`
                                ${
                                    currentOpenedTab === 0
                                        ? currentPlanet?.overview.source
                                        : currentOpenedTab === 1
                                        ? currentPlanet?.structure.source
                                        : currentPlanet?.geology.source
                                }
                            `}
                                className="my-6 font-spartan opacity-50"
                            >
                                <span className="text-custom_grey font-spartan">
                                    Source:{' '}
                                </span>
                                Wikipedia
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                            >
                                <path
                                    fill="#FFF"
                                    d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                                    opacity=".5"
                                />
                            </svg>
                        </div>
                    </div>
                    <ul className="hidden md:block my-3 w-4/12 lg:w-9/12 ">
                        <li>
                            <button
                                className={`tab w-full h-[48] uppercase my-2 py-3 flex justify-between font-spartan  font-bold tracking-wider text-[12px]`}
                                style={{
                                    backgroundColor: `${
                                        currentOpenedTab === 0
                                            ? currentPlanet?.color
                                            : 'transparent'
                                    }`,
                                }}
                                onClick={() => setCurrentOpenedTab(0)}
                            >
                                <span className="px-6 opacity-70">01</span>
                                <span className="flex-1 text-left">
                                    Overview
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                className={`tab w-full h-[48] uppercase my-2  py-3 flex justify-between font-spartan font-bold tracking-wider text-[12px]`}
                                style={{
                                    backgroundColor: `${
                                        currentOpenedTab === 1
                                            ? currentPlanet?.color
                                            : 'transparent'
                                    }`,
                                }}
                                onClick={() => setCurrentOpenedTab(1)}
                            >
                                <span className="px-6 opacity-70">02</span>
                                <span className="flex-1 text-left">
                                    Internal Structure
                                </span>
                            </button>
                        </li>
                        <li>
                            <button
                                className={`tab w-full h-[48] uppercase my-2  py-3 flex justify-between font-spartan  font-bold tracking-wider text-[12px]`}
                                style={{
                                    backgroundColor: `${
                                        currentOpenedTab === 2
                                            ? currentPlanet?.color
                                            : 'transparent'
                                    }`,
                                }}
                                onClick={() => setCurrentOpenedTab(2)}
                            >
                                <span className="px-6 opacity-70">03</span>
                                <span className="flex-1 text-left">
                                    Surface Geology
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
    
        </article>
    )
}
