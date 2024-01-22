import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";

import customMarkerIcon from "../../images/marker.png";

interface GoogleMapProps {
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

const GoogleMap: React.FC<GoogleMapProps> = ({ coordinates }) => {
  const mapContainerStyle =
    "h-64 w-full border border-gray-300 rounded-md overflow-hidden";

  const center: LatLngExpression = [
    parseFloat(coordinates.latitude),
    parseFloat(coordinates.longitude),
  ];

  const customIcon = new L.Icon({
    iconUrl: customMarkerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-4">Location on Map</h2>
      <div className={mapContainerStyle}>
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} icon={customIcon}>
            <Popup>Easily customizable.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default GoogleMap;
