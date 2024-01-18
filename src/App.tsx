import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

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
        
        <Routes>
        

          <Route path={'/'} element={
           
              <PersonList people={people} onPersonClick={handlePersonClick} />
           
          } />

        <Route path={'/person/:id'} element={
            <PersonDetails people={people} />
          } />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;