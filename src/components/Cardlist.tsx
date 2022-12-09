import Carditem from './Carditem'


interface CardListProps {
  jobData: CardItem[]
}

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


function Cardlist({jobData}: CardListProps) {

  return (
    <ul className='mt-20 grid gap-x-[2rem]	md:grid-cols-2 lg:grid-cols-3 w-5/6 lg:max-w-6xl mx-auto place-items-center'>
      {
        jobData?.length ? jobData.map(card => (
          <Carditem key={card.id} card={card} />
        )) : (
          <div className='col-start-2'>
              <h4 className='mx-auto dark:text-white'>No results found sorry 🥲</h4>
          </div>

        )
      }
    </ul>
  )
}

export default Cardlist