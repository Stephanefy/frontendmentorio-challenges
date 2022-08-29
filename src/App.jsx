import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import { useEffect } from 'react';

const ipifyApiKey = import.meta.env.VITE_IPIFY;
const positionStackApiKey = import.meta.env.VITE_POSITIONSTACK;

function App() {

  const [ipData, setIpData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const [error, setError] = useState(null);



  // reset error 
  useEffect(() => {
      setTimeout(() => {
        setError(null)
      },3000)
  },[error])

  const handleSearch = (e) => {

    e.preventDefault()

    if(!searchParams) {
      setError('Please enter a valid IP address or domain')
    }

    const params = searchParams.domain ? 'domain=' + searchParams.domain : 'ipAddress=' + searchParams.ip;

    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${ipifyApiKey}&${params}`)
    .then(res => res.json())
    .then(data => setIpData(data))
    .catch(err => setError(err))

  }

  useEffect(() => {
    fetch(`http://api.positionstack.com/v1/forward?access_key=${positionStackApiKey}&query=${ipData?.location.country},${ipData?.location.region}`)
      .then(res => res.json())
      .then(locationD => setLocationData(locationD.data[0]))
  },[ipData])
 


  console.log(locationData)

  return (
    <div className="App">
        <Header ipData={ipData} setSearchParams={setSearchParams} handleSearch={handleSearch} error={error}/>
        <div className="mapContainer">
          <Map locationData={locationData}/>
        </div>
    </div>
  )
}

export default App
