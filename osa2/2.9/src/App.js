import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("new name");
  const [newNumber, setNewNumber] = useState("new number");

  const addName = (event) => {
    event.preventDefault();

    const nameExist = persons.filter((person) => person.name === newName);

    if (nameExist.length < 1) {
      const nameObj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(nameObj));
      setNewName("");
      setNewNumber("");
    } else alert(`${newName} is already added to phonebook`);
  };

  const handleNum = (event) => {
    setNewNumber(event.target.value);
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
       filter shown with 
       <input></input>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
      </form>
      <form onSubmit={addName}>
        <div>
          number: <input value={newNumber} onChange={handleNum}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}{" "}
        </div>
      ))}
    </div>
  );
};

export default App;
