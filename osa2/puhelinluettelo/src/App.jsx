// Osa 2.10

import { useState } from 'react'

const personlist = [
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }
]

const Filter = ({chosenPerson, handlePersonChange}) => {
  return(<div>
  <label htmlFor="filter">filter shown with:</label>
  <input value={chosenPerson} onChange={handlePersonChange} id="filter"/> 
  </div> 
)}

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

const Numbers = ({persons, chosenPerson}) => {

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(chosenPerson.toLowerCase()))

  return(
  personsToShow.map (person => 
    <p key={person.name}>
    {person.name} {person.number}
   </p>
   )
  )
}

const App = () => {
  const [persons, setPersons] = useState(personlist) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [chosenPerson, setNewChoice] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    }

  const handlePersonChange = (event) => {
    setNewChoice(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()
    const exists = (person) => { 
      return person.name === 
        newName
    };
  
    if (persons.some(exists)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handlePersonChange={handlePersonChange} chosenPerson={chosenPerson}/>
      <h3>add a new</h3>
      <PersonForm 
        handleNameChange = {handleNameChange}
        handleNumberChange = {handleNumberChange}
        addName = {addName}
        newName = {newName}
        newNumber= {newNumber}
      />
      <Numbers persons= {persons} chosenPerson={chosenPerson}/>
      </div>
  )

}

export default App

// // Osa 2.9

// import { useState } from 'react'

// const personlist = [
//   { name: 'Arto Hellas', number: '040-123456' },
//   { name: 'Ada Lovelace', number: '39-44-5323523' },
//   { name: 'Dan Abramov', number: '12-43-234345' },
//   { name: 'Mary Poppendieck', number: '39-23-6423122' }
// ]

// const App = () => {
//   const [persons, setPersons] = useState(personlist) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [chosenPerson, setNewChoice] = useState('')

//   const handleNameChange = (event) => {
//     // console.log(`test: ${event.target.value}`)
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//     }

//   const personsToShow = persons.filter(person => person.name.toLowerCase().includes(chosenPerson.toLowerCase()))

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
//       <div>
//       <label htmlFor="filter">filter shown with:</label>
//       <input value={chosenPerson} onChange={handlePersonChange} name="filter"/>
//       </div>  
//       <h2>add a new</h2>
//       <form onSubmit={addName}>
//         <div>
//           <label htmlFor="name">name:</label>
//           <input value={newName} onChange={handleNameChange} name="name"/>
//         </div>
//         <div>
//           <label htmlFor="number">number:</label>
//           <input value={newNumber} onChange={handleNumberChange} name="number"/>
//         </div>
//         <div>
//             <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {personsToShow.map (person => 
//        <p key={person.name}>
//        {person.name} {person.number}
//       </p>
//       )}
//       </div>
//   )

// }

// export default App

// Osa 2.8

// import { useState } from 'react'

// const personlist = [
//   { name: 'Arto Hellas', number: "040-1231244" }
// ]


// const App = () => {
//   const [persons, setPersons] = useState(personlist) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')

//   const handleNameChange = (event) => {
//     // console.log(`test: ${event.target.value}`)
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//     }

//   const addName = (event) => {
//     event.preventDefault()
//     const exists = (person) => { 
//       return person.name === 
//         newName
      
//     };
//     // persons.forEach((element) => console.log(element.name));
//     // console.log(newName, event.target)
//     // if (! persons.includes({name: newName})) {
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
//       <form onSubmit={addName}>
//         <div>
//           <label htmlFor="name">name:</label>
//           <input value={newName} onChange={handleNameChange} name="name"/>
//         </div>
//         <div>
//           <label htmlFor="number">number:</label>
//           <input value={newNumber} onChange={handleNumberChange} name="number"/>
//         </div>
//         <div>
//             <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {persons.map (person => 
//        <p key={person.name}>
//        {person.name} {person.number}
//       </p>
//       )}
//       </div>
//   )

// }

// export default App


// Osa 2.7
// import { useState } from 'react'

// const personlist = [
//   { name: 'Arto Hellas' }
// ]


// const App = () => {
//   const [persons, setPersons] = useState(personlist) 
//   const [newName, setNewName] = useState('')

//   const handleNameChange = (event) => {
//     console.log(`test: ${event.target.value}`)
//     setNewName(event.target.value)
//   }


//   const addName = (event) => {
//     event.preventDefault()
//     const exists = (person) => { 
//       return person.name === 
//         newName
      
//     };
//     // persons.forEach((element) => console.log(element.name));
//     // console.log(newName, event.target)
//     // if (! persons.includes({name: newName})) {
//     if (persons.some(exists)) {
//       alert(`${newName} is already added to phonebook`)
//     } else {
//       setPersons(persons.concat({name: newName}))
//       setNewName("")
//     }
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addName}>
//         <input value={newName} onChange={handleNameChange} />
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {persons.map (person => 
//        <p key={person.name}>
//        {person.name}
//      </p>
//       )}
//       </div>
//   )

// }

// export default App
// Osa 2.6
// import { useState } from 'react'

// const personlist = [
//   { name: 'Arto Hellas' }
// ]


// const App = () => {
//   const [persons, setPersons] = useState(personlist) 
//   const [newName, setNewName] = useState('')

//   const handleNameChange = (event) => {
//     setNewName(event.target.value)
//   }

//   const addName = (event) => {
//     event.preventDefault()
//     // console.log(newName, event.target)
//     setPersons(persons.concat({name: newName}))
//     setNewName(" ")

//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addName}>
//         <input value={newName} onChange={handleNameChange} />
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {persons.map (person => 
//        <p key={person.name}>
//        {person.name}
//      </p>
//       )}
//       </div>
//   )

// }

// export default App