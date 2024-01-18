import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Map from "./Map";
import PersonList from "./PersonList";
import PersonDetails from "./PersonDetails";
import { Person } from "./types";

const API_KEY = "b2atclr0nk1po45amg305meheqf4xrjt9a1bo410"; // Replace with your actual API key

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);


  useEffect(() => {
    // Call the API to retrieve the list of people
    fetch("https://api.json-generator.com/templates/-xdNcNKYtTFG/data", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
  };

  return (
    <Router>
      <div>
        <h1>List of People</h1>
        <Routes>
          <Route  path="/">
            <PersonList people={people} />
          </Route>
          <Route path="/person/:id">
            <PersonDetails people={people} />
          </Route>
          </Routes>
        <Map people={people} />
      </div>
    </Router>
  );
};

export default App;