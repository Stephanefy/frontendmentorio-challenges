import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import styled from 'styled-components'
import "leaflet/dist/leaflet.css"




function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


export default function Map({ locationData }) {

  console.log("''''",locationData)


  return (
    <div>
      <MapContainer style={{ height: "100%", width: "100%", zIndex: "2" }} center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false} >
      <ChangeView center={[locationData?.latitude, locationData?.longitude]} zoom={13} /> 
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

const MapParentContainer = styled.div `
  width: 100% ;
  height: 100% ;
`