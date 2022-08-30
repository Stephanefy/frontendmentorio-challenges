import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet/Marker'
import styled from 'styled-components'
import "leaflet/dist/leaflet.css"
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';



function ChangeView({ center, zoom }) {
  const map = useMap();

  if (!center.includes(undefined)) {
      map.setView(center, zoom);
  } 

  return null;
}


export default function Map({ locationData }) {

  const iconMarkup = renderToStaticMarkup(<i className="fas fa-map-marker-alt fa-4x"/>);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
    className: "custom-marker",
  });

  const position = [locationData?.lat, locationData?.lng]


  return (
    <div>
      <MapContainer style={{ height: "100%", width: "100%", zIndex: "2" }} center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false} >
      <ChangeView center={position} zoom={13} /> 
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          !position.includes(undefined) && (
            <Marker position={position} icon={customMarkerIcon} />
          )
        }
      </MapContainer>
    </div>
  )
}

