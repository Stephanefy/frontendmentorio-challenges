import { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import { useEffect } from 'react';
import { useDetectAdBlock } from "adblock-detect-react";


const ipifyApiKey = import.meta.env.VITE_IPIFY;


function App() {

  const [ipData, setIpData] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const [error, setError] = useState(null);

  const adBlockDetected = useDetectAdBlock();

  const inputRef = useRef(null);

  // reset error 
  useEffect(() => {
      setTimeout(() => {
        setError(null)
      },3000)
  },[error])


  const handleSearch = (e) => {

    e.preventDefault()
    // reset form data
    setIpData(null)
    setSearchParams(null)
    setTimeout(() => {
        inputRef.current.value = ''
    }, 1000)

    if(!searchParams) {
      setError('Please enter a valid IP address or domain')
    }

    const params = searchParams.domain ? 'domain=' + searchParams.domain : 'ipAddress=' + searchParams.ip;

    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${ipifyApiKey}&${params}`)
    .then(res => res.json())
    .then(data => setIpData(data))
    .catch(err => setError(err))

  }

  return (
    <div className="App">
        <Header ipData={ipData} setSearchParams={setSearchParams} handleSearch={handleSearch} error={error} inputRef={inputRef} adBlockDetected={adBlockDetected}/>
        <div className="mapContainer">
          {!adBlockDetected ? <Map locationData={ipData?.location}/> : <div className='adblockAlertContainer'>

          <div className='adBlockAlert'>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={100} height={50}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>

          </div>
          <p>
            Deactivate Adblock and reload the page (there are no ads on this demo page)
          </p>
          </div>
          </div> }

        </div>
    </div>
  )
}

export default App
