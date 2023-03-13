import { FC, useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MainPanel from './main/MainPanel';
import { AuthContext } from '../../../context/AuthContext';
import { Outlet } from 'react-router-dom';

interface Props {}

const MainDashboardTeacher: FC<Props> = (props): JSX.Element => {

  const { state } = useContext(AuthContext)



  useEffect(() => {
     fetch('/api/user', {credentials: 'include'})
     .then(res => res.json())
     .then(data => console.log(data))
  }, [])




  return (
  
    <div className='w-full flex lg:justify-center items-start'>
        <Sidebar />
        <Outlet/>
    
    </div>
  
   )
};

export default MainDashboardTeacher;