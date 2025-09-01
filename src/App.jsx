import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import axios from "axios"
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)               // cargar datos iniciales al backend
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)              // manejar cambio del nombre
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)            // manejar cambio del numero  
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)              // manejar cambio del filtro
  }

  const addPerson = (event) => {
    event.preventDefault()                      // agregar nueva persona 

    const newPerson = {
      name: newName,
      number: newNumber
    }

    axios
      .post("http://localhost:3001/persons", newPerson)
      .then(response => {
        setPersons(persons.concat(response.data))       // POST al backend
        setNewName("")
        setNewNumber("")
      })
  }

  const personsToShow = persons.filter(person =>        // aplicar filtro
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filter} onChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App