import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Person } from "./types";

interface MapProps {
  people: Person[];
}

const Map: React.FC<MapProps> = ({ people }) => {
    const defaultPosition = { lat: 0, lng: 0 };
  return (
    <MapContainer center={defaultPosition} zoom={5} style={{ height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {people.map((person) => (
        <Marker key={person._id} position={[person.location.latitude, person.location.longitude]} />
      ))}
    </MapContainer>
  );
};

export default Map;