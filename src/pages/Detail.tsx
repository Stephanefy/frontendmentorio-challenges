import React, { useEffect, useState } from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
import data from '../data.json'
import { useParams } from 'react-router-dom'

type CurrentJob = {
  
    id: number;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements?: {
      content?: string;
      items?: string[];
  },
  role?: {
    content?: string;
    items?: string[];
  }
  
};




const Detail = () => {

  const { id } = useParams()
  const [currentJob, setCurrentJob] = useState({} as CurrentJob)

  useEffect(() => {
    let currJob = data.filter((e) => e.id === +id!)    
    setCurrentJob(currJob[0])
  }, [])



  return (
    <>
      <Header currentJob={currentJob}/>
      <Body currentJob={currentJob}/>
      <Footer currentJob={currentJob}/>
    </>
  )
}

export default Detail