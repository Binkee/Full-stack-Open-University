import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("new name");

  const addName = (event) => {
    event.preventDefault();

    const nameExist = persons.filter((person) => person.name === newName);

    if (nameExist.length < 1) {
      const nameObj = {
        name: newName,
        id: persons.length + 1,
      };
      setPersons(persons.concat(nameObj));
      setNewName("");
    } else alert(`${newName} is already added to phonebook`);
  };

  const handleName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name} </div>
      ))}
    </div>
  );
};

export default App;
