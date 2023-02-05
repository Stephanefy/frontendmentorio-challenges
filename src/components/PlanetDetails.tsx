
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
    temperature: string
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




const PlanetDetails = ({ currentPlanet }: PlanetProps) => {
  return (
    <section className="max-w-3xl lg:max-w-none lg:w-10/12 flex flex-col md:flex-row justify-between lg:mb-24 lg:mt-0 overflow-x-hidden px-3 mx-auto mb-6">
    <article className="planet--features flex justify-between items-center md:block border-2 border-white my-1 md:my-3 mx-auto md:mr-1  p-3 lg:p-6 text-left w-11/12 lg:w-72">
        <h4 className="text--grey text-xs lg:text-sm font-bold font-spartan">
            Rotation Time
        </h4>
        <p className="text-2xl lg:text-4xl mt-2 uppercase text-white">
            {currentPlanet?.rotation}
        </p>
    </article>
    <article className="planet--features flex justify-between items-center md:block  border-2 border-white my-1 md:my-3 mx-auto md:mx-1 lg:mx-3 p-3 lg:p-6 text-left w-11/12 lg:w-72">
        <h4 className="text--grey text-xs lg:text-sm font-spartan font-bold">
            Revolution Time
        </h4>
        <p className="text-2xl lg:text-4xl mt-2 uppercase text-white">
            {currentPlanet?.revolution}
        </p>
    </article>
    <article className="planet--features flex justify-between items-center md:block  border-2 border-white my-1 md:my-3 mx-auto md:mx-1 lg:mx-3 p-3 lg:p-6 text-left w-11/12 lg:w-72">
        <h4 className="text--grey text-xs lg:text-sm font-spartan font-bold">Radius</h4>
        <p className="text-2xl lg:text-4xl mt-2 uppercase text-white">
            {currentPlanet?.radius}
        </p>
    </article>
    <article className="planet--features flex justify-between items-center md:block  border-2 border-white my-1 md:my-3 mx-auto md:ml-1 p-3 lg:p-6 text-left w-11/12 lg:w-72">
        <h4 className="text--grey text-xs lg:text-sm font-spartan font-bold">
            Average Temp
        </h4>
        <p className="text-2xl lg:text-4xl mt-2 uppercase text-white">
            {currentPlanet?.temperature}
        </p>
    </article>
</section>
  )
}

export default PlanetDetails