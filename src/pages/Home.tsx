import { useState, useEffect } from 'react';
import Cardlist from '../components/Cardlist'
import Button from '../components/Button'
import Searchbar from '../components/Searchbar'
import Modal from '../components/Modal'
import data from '../data.json'


const initialData  = data.map((card) => ({
    id: card.id,
    company: card.company,
    logo: card.logo,
    logoBackground: card.logoBackground,
    position: card.position,
    postedAt: card.postedAt,
    contract: card.contract,
    location: card.location,
    website: card.website,
    apply: card.apply,
    description: card.description,
    requirements: {
        content: card.requirements.content,
        items: card.requirements.items,
    },
    role: {
        content: card.role.content,
        items: card.role.items,
    },
}))


const Home = () => {
  interface CardItem {
    id: number,
    company: string,
    logo: string,
    logoBackground: string,
    position: string,
    postedAt: string,
    contract: string,
    location: string,
    website: string,
    apply: string,
    description: string,
    requirements: {
      content: string,
      items: string[]
    },
    role: {
      content: string,
      items: string[]
  }

}
    const [jobData, setJobData] = useState(initialData)
    const [openModal, setOpenModal] = useState<boolean>(false)


    function filterByTitle(terms: string[]): CardItem[] {
        const filteredByTitleData = data.filter((element) => {
            for (let term of terms) {
                if (
                    element.position.toLowerCase().includes(term.toLowerCase())
                ) {
                    return element
                }
            }
        })
        setJobData(filteredByTitleData)
        return filteredByTitleData
    }

    function filterByLocation(term: string): CardItem[]{
        const filteredByLocation = data.filter((element) => {
                if (element.location.toLowerCase().includes(term.toLowerCase())) {
                    return element
                }
            
        })
        setJobData(filteredByLocation)
        return filteredByLocation
    }

    function filterByContract(): CardItem[] {
        const filteredByCheckStatus: CardItem[]  = data.filter(element => element.contract === "Full Time")
        setJobData(filteredByCheckStatus)
        return filteredByCheckStatus
    }

    function filterByall(isFullTime: boolean,  location: string, term?: string,): CardItem[] {
        const filteredByAllData: CardItem[] = data.filter(element => {

            let fullTimeStatus: string = isFullTime ? "Full Time" : "Part Time"

            if (term !== undefined) {
                if (element.contract === fullTimeStatus && element.location.toLowerCase().includes(location.toLowerCase()) && element.position.toLowerCase().includes(term!.toLowerCase())) {
                    return element
                }  
            } 
            if (term === undefined && location !== undefined && fullTimeStatus === "Full Time") {
                if(element.contract === fullTimeStatus && element.location.toLowerCase().includes(location.toLowerCase())) {
                    return element
                }
            }
            if (term !== undefined && location !== undefined && fullTimeStatus === "Part Time") {
                if(element.location.toLowerCase().includes(location.toLowerCase()) && element.position.toLowerCase().includes(term!.toLowerCase())) {
                    return element
                }
            }
            if (term !== undefined && location === undefined && fullTimeStatus === "Full Time") {
                if(element.contract === fullTimeStatus && element.position.toLowerCase().includes(term!.toLowerCase())) {
                    return element
                }
            }
            
                
        })

        setJobData(filteredByAllData)
        return data
    }
    

    return (
        <>
            <Searchbar
                setOpenModal={setOpenModal}
                filteredByTitle={filterByTitle}
                filterByLocation={filterByLocation}
                filterByContract={filterByContract}
                filterByAll={filterByall}
            />
            <Cardlist jobData={jobData} />
            <div className="flex justify-center mt-24 mb-24">
                <Button
                    text1={'Load More'}
                    background="bg-app-violet"
                    textColor="white"
                    paddingX="px-6"
                    paddingY="py-3"
                />
            </div>
            {openModal && <Modal 
            setOpenModal={setOpenModal}
            filterByAll={filterByall}
            filterByContract={filterByContract}
            filterByLocation={filterByLocation}
            />}
        </>
    )
}

export default Home
