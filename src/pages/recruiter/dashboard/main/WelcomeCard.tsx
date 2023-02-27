import { FC } from 'react';
import SvgComponent from '../../../../components/svg/WelcomeCardSvg';

interface Props {}

const WelcomeCard: FC<Props> = (props): JSX.Element => {
  return <div className='bg-app-light-violet p-6 rounded-lg w-12/12 flex'>
    <div className='basis-6/12 space-y-20'>
        <h1 className='text-white text-3xl'>Welcome to your dashboard</h1>
        <p className='text-white'>You have 10 jobs listed</p>
        <p className='text-white'>You have 0 job application</p>
    </div>
    <div className='basis-6/12'>
        <SvgComponent/>
    </div>
  </div>;
};

export default WelcomeCard;