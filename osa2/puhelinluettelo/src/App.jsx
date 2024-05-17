// Osa 2.15-2.17
import { useState, useEffect } from 'react'
import nameService from './services/persons'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="messagestyle">
      {message}
    </div>
  )
}

const Filter = ({chosenPerson, handlePersonChange}) => {
  return(<div>
  <label htmlFor="filter">filter shown with:</label>
  <input value={chosenPerson} onChange={handlePersonChange} id="filter"/> 
  </div> 
)}

const DeletePerson = (props) => {
  return (
  <button onClick={() => props.deletePerson(props.id)}>delete</button>
  )
}

const PersonForm = (props) => {

  return(
  <form onSubmit={props.addName}>
  <div>
    <label htmlFor="name">name:</label>
    <input value={props.newName} onChange={props.handleNameChange} id="name"/>
  </div>
  <div>
    <label htmlFor="number">number:</label>
    <input value={props.newNumber} onChange={props.handleNumberChange} id="number"/>
  </div>
  <div>
      <button type="submit">add</button>
  </div>
</form>
  )
}

const Numbers = ({persons, chosenPerson, deletePerson}) => {
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(chosenPerson.toLowerCase()))
  return(
  personsToShow.map (person => 
    <p key={person.name}>
    {person.name} {person.number} <DeletePerson id = {person.id} deletePerson= {deletePerson}/>
   </p>
   )
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [chosenPerson, setNewChoice] = useState('')
  const [message, setNewMessage] = useState(null)

  const hook = () => {
    nameService
      .getAll()
        .then(initialNames => {
        setPersons(initialNames)
      })
  }

  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    }

  const handlePersonChange = (event) => {
    setNewChoice(event.target.value)
  }

  const handleNotification =(message) => {
    setNewMessage(message)
    setTimeout(() => {
      setNewMessage(null)
    }, 3000)
  }

  const deletePerson = (id) => {
   let proceed = confirm(`Delete ${persons.find(person => person.id ===id).name} ?`)
   if (proceed) {
    nameService
    .remove(id)
    .then(setPersons(persons.filter(person => person.id !== id)))
    handleNotification(`Deleted ${persons.find(person => person.id ===id).name}`)
  }
  }

  const updateNumber = (id) => {
    const person = persons.find((person => person.id === id))
    const updatedData = {...person, number: newNumber}
    nameService
    .replace(id, updatedData)
    .then(setPersons(persons.map(person => {
      if (person.id === id) {
        handleNotification(`Updated ${person.name}'s number`)
        return {...person, number: newNumber}
      } else { 
        return person
      }
    })))
    .catch(error => {
      handleNotification(`Information of ${person.name} has already been removed from the server`)
      setPersons((persons.filter(person => person.id !== id)))
    })

    
  }
  
  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.some((person) => person.name === newName))
    {
      let proceed = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (proceed) { 
      const index = persons.findIndex((person) => person.name === newName)
      updateNumber(persons[index].id)
      }
    } else {
        nameService
        .create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          handleNotification(`Added ${newName}`)
        })
        setNewName('')
        setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter handlePersonChange={handlePersonChange} chosenPerson={chosenPerson}/>
      <h3>add a new</h3>
      <PersonForm 
        handleNameChange = {handleNameChange}
        handleNumberChange = {handleNumberChange}
        addName = {addName}
        newName = {newName}
        newNumber= {newNumber}
      />
      <Numbers persons= {persons} chosenPerson={chosenPerson} deletePerson = {deletePerson}/>
      </div>
  )

}

export default App

// Osa 2.14
// import { useState, useEffect } from 'react'
// import nameService from './services/persons'

// const Filter = ({chosenPerson, handlePersonChange}) => {
//   return(<div>
//   <label htmlFor="filter">filter shown with:</label>
//   <input value={chosenPerson} onChange={handlePersonChange} id="filter"/> 
//   </div> 
// )}

// const DeletePerson = (props) => {
//   return (
//   <button onClick={() => props.deletePerson(props.id)}>delete</button>
//   )
// }

// const PersonForm = (props) => {

//   return(
//   <form onSubmit={props.addName}>
//   <div>
//     <label htmlFor="name">name:</label>
//     <input value={props.newName} onChange={props.handleNameChange} id="name"/>
//   </div>
//   <div>
//     <label htmlFor="number">number:</label>
//     <input value={props.newNumber} onChange={props.handleNumberChange} id="number"/>
//   </div>
//   <div>
//       <button type="submit">add</button>
//   </div>
// </form>
//   )
// }

// const Numbers = ({persons, chosenPerson, deletePerson}) => {

//   const personsToShow = persons.filter(person => person.name.toLowerCase().includes(chosenPerson.toLowerCase()))

//   return(
//   personsToShow.map (person => 
//     <p key={person.name}>
//     {person.name} {person.number} <DeletePerson id = {person.id} deletePerson= {deletePerson}/>
//    </p>
//    )
//   )
// }

// const App = () => {
//   const [persons, setPersons] = useState([]) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [chosenPerson, setNewChoice] = useState('')
//   // const [personToRemove, setNewRemove] =useState('')

//   const hook = () => {
//     nameService
//       .getAll()
//         .then(initialNames => {
//         setPersons(initialNames)
//       })
//   }

//   useEffect(hook, [])

//   const handleNameChange = (event) => {
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//     }

//   const handlePersonChange = (event) => {
//     setNewChoice(event.target.value)
//   }

//   const deletePerson = (id) => {
//     nameService
//     .remove(id)
//     .then(setPersons(persons.filter(person => person.id !== id)))

//   }

  
//   const addName = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName,
//       number: newNumber,
//     }
    
//     if (persons.some((person) => person.name === newName))
//     {
//       alert(`${newName} is already added to phonebook`)
//     } else {
//         nameService
//         .create(personObject)
//         .then(newPerson => {
//           setPersons(persons.concat(newPerson))
//           setNewName('')
//           setNewNumber('')
//         })
//     }
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Filter handlePersonChange={handlePersonChange} chosenPerson={chosenPerson}/>
//       <h3>add a new</h3>
//       <PersonForm 
//         handleNameChange = {handleNameChange}
//         handleNumberChange = {handleNumberChange}
//         addName = {addName}
//         newName = {newName}
//         newNumber= {newNumber}
//       />
//       <Numbers persons= {persons} chosenPerson={chosenPerson} deletePerson = {deletePerson}/>
//       </div>
//   )

// }

// export default App

// // Osa 2.12-2.13
// // import axios from 'axios'
// import { useState, useEffect } from 'react'
// import nameService from './services/persons'

// const Filter = ({chosenPerson, handlePersonChange}) => {
//   return(<div>
//   <label htmlFor="filter">filter shown with:</label>
//   <input value={chosenPerson} onChange={handlePersonChange} id="filter"/> 
//   </div> 
// )}

// const PersonForm = (props) => {

//   return(
//   <form onSubmit={props.addName}>
//   <div>
//     <label htmlFor="name">name:</label>
//     <input value={props.newName} onChange={props.handleNameChange} id="name"/>
//   </div>
//   <div>
//     <label htmlFor="number">number:</label>
//     <input value={props.newNumber} onChange={props.handleNumberChange} id="number"/>
//   </div>
//   <div>
//       <button type="submit">add</button>
//   </div>
// </form>
//   )
// }

// const Numbers = ({persons, chosenPerson}) => {

//   const personsToShow = persons.filter(person => person.name.toLowerCase().includes(chosenPerson.toLowerCase()))

//   return(
//   personsToShow.map (person => 
//     <p key={person.name}>
//     {person.name} {person.number}
//    </p>
//    )
//   )
// }

// const App = () => {
//   const [persons, setPersons] = useState([]) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [chosenPerson, setNewChoice] = useState('')

//   // const hook = () => {
//   //   axios
//   //     .get('http://localhost:3001/persons')
//   //     .then(response => {
//   //       setPersons(response.data)
//   //     })
//   // }

//   // useEffect(hook, [])

//   const hook = () => {
//     nameService
//       .getAll()
//         .then(initialNames => {
//         setPersons(initialNames)
//       })
//   }

//   useEffect(hook, [])

//   const handleNameChange = (event) => {
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//     }

//   const handlePersonChange = (event) => {
//     setNewChoice(event.target.value)
//   }
  
//   const addName = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName,
//       number: newNumber,
//     }
    
//     if (persons.some((person) => person.name === newName))
//     {
//       alert(`${newName} is already added to phonebook`)
//     } else {
//         nameService
//         .create(personObject)
//         .then(newPerson => {
//           setPersons(persons.concat(newPerson))
//           setNewName('')
//           setNewNumber('')
//         // axios
//         // .post('http://localhost:3001/persons', personObject)
//         // .then(response => {
//         //   setPersons(persons.concat(response.data))
//         //   setNewName('')
//         //   setNewNumber('')
//         })
//     }
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Filter handlePersonChange={handlePersonChange} chosenPerson={chosenPerson}/>
//       <h3>add a new</h3>
//       <PersonForm 
//         handleNameChange = {handleNameChange}
//         handleNumberChange = {handleNumberChange}
//         addName = {addName}
//         newName = {newName}
//         newNumber= {newNumber}
//       />
//       <Numbers persons= {persons} chosenPerson={chosenPerson}/>
//       </div>
//   )

// }

// export default App


// // Osa 2.11
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const Filter = ({chosenPerson, handlePersonChange}) => {
//   return(<div>
//   <label htmlFor="filter">filter shown with:</label>
//   <input value={chosenPerson} onChange={handlePersonChange} id="filter"/> 
//   </div> 
// )}

// const PersonForm = (props) => {

//   return(
//   <form onSubmit={props.addName}>
//   <div>
//     <label htmlFor="name">name:</label>
//     <input value={props.newName} onChange={props.handleNameChange} id="name"/>
//   </div>
//   <div>
//     <label htmlFor="number">number:</label>
//     <input value={props.newNumber} onChange={props.handleNumberChange} id="number"/>
//   </div>
//   <div>
//       <button type="submit">add</button>
//   </div>
// </form>
//   )
// }

// const Numbers = ({persons, chosenPerson}) => {

//   const personsToShow = persons.filter(person => person.name.toLowerCase().includes(chosenPerson.toLowerCase()))

//   return(
//   personsToShow.map (person => 
//     <p key={person.name}>
//     {person.name} {person.number}
//    </p>
//    )
//   )
// }

// const App = () => {
//   const [persons, setPersons] = useState([]) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [chosenPerson, setNewChoice] = useState('')

//   const hook = () => {
//     axios
//       .get('http://localhost:3001/persons')
//       .then(response => {
//         setPersons(response.data)
//       })
//   }

//   useEffect(hook, [])

//   const handleNameChange = (event) => {
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//     }

//   const handlePersonChange = (event) => {
//     setNewChoice(event.target.value)
//   }
  
//   const addName = (event) => {
//     event.preventDefault()
//     const exists = (person) => { 
//       return person.name === 
//         newName
//     };
  
//     if (persons.some(exists)) {
//       alert(`${newName} is already added to phonebook`)
//     } else {
//       setPersons(persons.concat({name: newName, number: newNumber}))
//       setNewName("")
//       setNewNumber("")
//     }
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Filter handlePersonChange={handlePersonChange} chosenPerson={chosenPerson}/>
//       <h3>add a new</h3>
//       <PersonForm 
//         handleNameChange = {handleNameChange}
//         handleNumberChange = {handleNumberChange}
//         addName = {addName}
//         newName = {newName}
//         newNumber= {newNumber}
//       />
//       <Numbers persons= {persons} chosenPerson={chosenPerson}/>
//       </div>
//   )

// }

// export default App

