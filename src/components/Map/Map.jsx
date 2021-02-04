import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker,  useMap } from "react-leaflet";


function Map() {

    const ResizeMap = () => {
        const map = useMap();
        map._onResize();
        return null;
    };

    const centerMAp = [47.5952, -122.3316]

    return (
        <div id='mapid'>
            <MapContainer center={centerMAp} zoom={12} className="maps">
                <ResizeMap />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={centerMAp} >
                </Marker>
            </MapContainer>
            <div className="separation"></div>
        </div>
    )
}

export default Map;
