import { FC, useContext } from 'react';
import WelcomeCard from './WelcomeCard';
import StatsApplicants from './StatsApplicants';
import StatsJobfield from './StatsJobfield';
import { User } from '../../../../context/AuthContext';
import { AuthContext } from '../../../../context/AuthContext';

interface Props {
  
}

const MainPanel: FC<Props> = (props): JSX.Element => {


  const { state } = useContext(AuthContext)

  return (
    <section className='h-full w-full  bg-gray-200 pt-8 pl-16 pr-16 lg:pr-6'>
    <h1 className='text-3xl mb-12'>Welcome {state.user!.email} </h1>
    <WelcomeCard/>
    <div className='mt-6 w-full flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-4 pb-16'>
      <StatsApplicants />
      <StatsJobfield />
    </div>
</section>
  )
};

export default MainPanel;