import React from 'react';
import Header from './Header';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import '../App.css';

const LeafletMap = ({locations, showLocation }) => {

    const handleButtonClick = (event) => {
        showLocation(event.target.value)
    }

    return (
        <>
        <div className='map'>
            <MapContainer
                locations ={locations}
                showLocation ={showLocation}
                id="Map"
                center={[55.8642, -4.2518]}
                zoom={12}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location)=>{

                    return(
                        <Marker 
                         position={[location.gps.lat, location.gps.long]} key={location._id}>
    
                        <Popup location={location}>
                        <button onClick={handleButtonClick} value={location._id}>{location.name}</button>
                        </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
            </div>
            </>
    )
}
export default LeafletMap;


       