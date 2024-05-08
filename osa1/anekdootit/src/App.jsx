import { useState } from 'react'

// tehtava1.13-1.14

const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

const BestAnecdote = (props) => {
  let mostPoints = props.mostPoints

  const shoWAnecdote = () => {
    if (mostPoints.anecdote !== " ") {
      return (<div><p>{mostPoints.anecdote}</p>
      <p>has {mostPoints.pointSum} votes</p></div>)
    }
    return 
  }

  return (
  <div><h1>Anecdote with most votes</h1>
  {shoWAnecdote()}</div> )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(anecdotes[0])
  const [jokenumber, setJokenumber] = useState(0)
  const [points, setPoints] = useState(new Array(8).fill(0))
  const [mostPoints, setMostPoints] = useState({anecdote: " ", pointSum: 0})

  const randomAnecdote = () => {
    let newjokenumber  = Math.floor(Math.random() * 8);
    while (newjokenumber === jokenumber) {
      newjokenumber = Math.floor(Math.random() * 8)
    }
    setJokenumber(newjokenumber)
    setSelected(anecdotes[newjokenumber])
  }
  
  const vote = () => {
    const copy = [...points]
    copy[jokenumber] += 1 
    setPoints(copy)
  }

  const mostVotes = () => {
 
    for (let i = 0; i < points.length; i++) {
      if (points[i] > mostPoints.pointSum) {
        setMostPoints({anecdote: selected, pointSum: points[i]})
      }
    
    }
  }

  mostVotes()


  return (
    <div>
      <h1>Anecdote of the day</h1>
          <p>{selected}</p>
          <p>has {points[jokenumber]} votes</p>

          <Button
          handleClick= {vote}
          text='vote'
          />
      
          <Button
          handleClick= {randomAnecdote}
          text='next anecdote'
          />

      <BestAnecdote mostPoints= {mostPoints}/>
    </div>
        
    
  )
}

export default App

  // return (
  //   <div>
  //     <h1>Anecdote of the day</h1>
  //       <table>
  //           <tbody>
  //               <tr>
  //                   <td>{selected}</td>
  //               </tr>
  //               <tr>
  //                 <td>has {points[jokenumber]} votes</td>
  //               </tr>
  //           </tbody>
  //       </table>
  //       <table>
  //           <tbody>
  //               <tr>
  //                 <td>
  //                       <Button
  //                       handleClick= {vote}
  //                       text='vote'
  //                       />
  //                 </td>
  //                 <td>
  //                       <Button
  //                       handleClick= {randomAnecdote}
  //                       text='next anecdote'
  //                       />
  //                 </td>
  //               </tr>
  //           </tbody>
  //       </table>
  //   </div>
        
    
  // )

// tehtava 1.12
// const Button = (props) => {
//     return (
//       <button onClick={props.handleClick}>
//         {props.text}
//       </button>
//     )
//   }

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
//     'The only way to go fast, is to go well.'
//   ]
   
//   const [selected, setSelected] = useState(anecdotes[0])

//   const randomAnecdote = () => {
//     let jokenumber  = Math.floor(Math.random() * 8);
//     setSelected(anecdotes[jokenumber])
//     console.log(jokenumber)
//   }
  

//   return (
//     <div>
//         <table>
//             <tbody>
//                 <tr>
//                     <td>
//                         <Button
//                         handleClick= {randomAnecdote}
//                         text='next anecdote'
//                         />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>{selected}</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
        
    
//   )
// }

// export default App