import { FC } from 'react';
import Sidebar from './Sidebar';
import WelcomeCard from './WelcomeCard';
import StatsApplicants from './StatsApplicants';
import StatsJobfield from './StatsJobfield';

interface Props {}

const MainDashboardTeacher: FC<Props> = (props): JSX.Element => {
  return (
  
    <div className='h-full w-full flex lg:justify-center items-start'>
        <Sidebar />
        <section className='h-full w-full  bg-gray-200 pt-8 pl-16 pr-16 lg:pr-6'>
            <h1 className='text-3xl mb-12'>Dashboard</h1>
            <WelcomeCard/>
            <div className='mt-6 w-full flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-4 pb-16'>
              <StatsApplicants />
              <StatsJobfield />
            </div>
        </section>
    </div>
  
   )
};

export default MainDashboardTeacher;