import React from "react";
import { Person } from "./types";

interface PersonListProps {
  people: Person[];
  onPersonClick: (person: Person) => void;
}

const PersonList: React.FC<PersonListProps> = ({ people, onPersonClick }) => {
  return (
    <ul>
      {people.map((person) => (
        <li key={person._id} onClick={() => onPersonClick(person)}>
        <img src={person.picture} alt={person.name.first} style={{ width: "50px", height: "50px" }} />
          {person.name.first} {person.name.last}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;