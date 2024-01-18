import React from "react";
import { Person } from "./types";
import { Link } from "react-router-dom";

interface PersonListProps {
  people: Person[];
  onPersonClick: (person: Person) => void;
}

const PersonList: React.FC<PersonListProps> = ({ people, onPersonClick }) => {
  
  return (
    <>
    <h1>List of People</h1>
    <ul>
      {people.map((p) => (
      <li key={p._id}>
        <Link to={`/person/${p._id}`}>
          <img src={p.picture} alt={p.name.first} style={{ width: "50px", height: "50px" }} />
          {p.name.first} {p.name.last}
        </Link>
        </li>
      ))}
    </ul>
    </>
  
  );
};

export default PersonList;