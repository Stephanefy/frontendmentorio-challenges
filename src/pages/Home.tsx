import { useState } from 'react'
import Cardlist from '../components/Cardlist'
import Button from '../components/Button'
import Searchbar from '../components/Searchbar'
import Modal from '../components/Modal'
import data from '../data.json'

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
    const [jobData, setJobData] = useState(() => {
        return data.map((card) => ({
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
    })
    const [openModal, setOpenModal] = useState<boolean>(false)

    function filterByTitle(terms: string[]): void {
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
    }

    function filterByLocation(term: string): void {
        const filteredByLocation = data.filter((element) => {
                if (element.location.toLowerCase().includes(term.toLowerCase())) {
                    return element
                }
            
        })
        setJobData(filteredByLocation)
    }

    function filterByContract(): void {
        const filteredByCheckStatus: CardItem[]  = data.filter(element => element.contract === "Full Time")
        setJobData(filteredByCheckStatus)
    }
    

    return (
        <>
            <Searchbar
                setOpenModal={setOpenModal}
                filteredByTitle={filterByTitle}
                filterByLocation={filterByLocation}
                filterByContract={filterByContract}
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
            {openModal && <Modal />}
        </>
    )
}

export default Home
