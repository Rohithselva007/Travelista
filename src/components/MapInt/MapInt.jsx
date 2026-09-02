import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

const RandomMap = () => {
    const locations = [
        {
            name: "New Delhi, India",
            lat: 28.6139,
            lng: 77.2090,
        },
        {
            name: "Paris, France",
            lat: 48.8566,
            lng: 2.3522,
        },
        {
            name: "Tokyo, Japan",
            lat: 35.6762,
            lng: 139.6503,
        },
        {
            name: "New York, USA",
            lat: 40.7128,
            lng: -74.0060,
        },
        {
            name: "London, UK",
            lat: 51.5074,
            lng: -0.1278,
        },
        {
            name: "Sydney, Australia",
            lat: -33.8688,
            lng: 151.2093,
        },
    ];

    const [location] = useState(() => {
        return locations[Math.floor(Math.random() * locations.length)];
    });

    return (
        <MapContainer
            center={[location.lat, location.lng]}
            zoom={5}
            className="map"
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[location.lat, location.lng]}>
                <Popup>
                    <strong>{location.name}</strong>
                    <br />
                    Random destination
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default RandomMap;