import React from "react";
import { useParams } from "react-router-dom";
import { Person } from "./types";

interface PersonDetailsProps {
  people: Person[];
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ people }) => {
  const { id } = useParams<{ id: string }>();
  const selectedPerson = people.find((person) => person._id === id);

  if (!selectedPerson) {
    return <div>Person not found</div>;
  }

  return (
    <div>
      <h2>Person Details</h2>
      <div>
        <img src={selectedPerson.picture} alt={selectedPerson.name.first} style={{ width: "100px", height: "100px" }} />
        <div>Name: {selectedPerson.name.first} {selectedPerson.name.last}</div>
        <div>Email: {selectedPerson.email}</div>
      </div>
    </div>
  );
};

export default PersonDetails;