import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Person } from "./types";
import "leaflet/dist/leaflet.css";
interface MapProps {
  people: Person[];
  selectedPerson: Person ;
}
// https://codesandbox.io/p/sandbox/react-leaflet-google-maps-free-rwzstu?file=%2Fsrc%2FApp.tsx%3A13%2C5-78%2C11
const Map: React.FC<MapProps> = ({ people, selectedPerson }) => {
  useEffect(() => {
    // Perform any necessary actions when the selectedPerson prop changes
    updateMap();
  }, [selectedPerson]);

  const updateMap = () => {
    // Code to update the map based on the new selectedPerson value
    // You can access the selectedPerson using the selectedPerson prop
  };

  return (
    <>
      <MapContainer center={[selectedPerson.location.latitude, selectedPerson.location.longitude]} zoom={3} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[selectedPerson.location.latitude, selectedPerson.location.longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
    </>
  );
};

export default Map;