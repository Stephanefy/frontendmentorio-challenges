import { FC, useContext, useState, useEffect } from 'react';
import { User } from '../../../../context/AuthContext';
import { AuthContext } from '../../../../context/AuthContext';
import PortalModal from '../../../../components/modals/PortalModal';
import JobOfferModalContent from './JobOfferModalContent';
import Card from './Card';
import { JobPost } from '../../../../types/global';
import Table from '../../../../components/Table';

interface Props {
  
}

const MainPanel: FC<Props> = (props): JSX.Element => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [postedJob, setPostedJob] = useState<JobPost[]>([]);


  useEffect(() => {
    fetch('/api/jobPost', { credentials: 'include' })
        .then((res) => res.json())
        .then((data) => setPostedJob(data.data))
}, [])

  const { state } = useContext(AuthContext)

  return (
    <section className='min-h-screen w-full bg-gray-200 pt-8 pl-16 lg:px-8'>
    {/* <h1 className='text-3xl mb-12'>{state.user!.email} </h1>
    <div className='mt-6 w-full flex flex-col gap-y-4 lg:gap-y-0 gap-x-4 pb-16'>
        <h1>Here you can post new job offers</h1>
        <div className='flex'>
            <Card
              title={"Add a new job offer"}
              backgroundColor='bg-app-violet'
              openModal={() => setOpenModal(true)}
            />
        </div>
    </div> */}
    <div>
      {/* <h2>Your job offers</h2>
      {
        postedJob.length > 0 ? (<p>You have posted {postedJob.length} job offers</p>): (<p>No job offers listed yet</p>)
      } */}
      <Table setOpenModal={setOpenModal} jobPosts={postedJob}/>
    </div>
    <PortalModal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <JobOfferModalContent />
    </PortalModal>
</section>
  )
};

export default MainPanel;