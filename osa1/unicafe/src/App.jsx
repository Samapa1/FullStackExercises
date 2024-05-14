// Lopullinen versio

import { useState } from 'react'

const StatisticLine = (props) =>{
  
  return (
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
  ) 
  }

const Statistics = (props) => {
  let all = props.all
  let good = props.good
  let bad = props.bad
  let neutral = props.neutral

  
  
  const calcAverage = () => {
    let summa = 0
      for (let i = 0; i < all.length; i++) {
        summa += all[i];
      }
      return ((summa / all.length).toFixed(1))
   
    }
  
  const calcPositives = () => {
      return ((((good / all.length) * 100).toFixed(1)).toString() + " %")
    }

    const feedbacksGiven = () => {
      if (all.length >0) {
        return (
        <div>
          <table>
            <tbody>
              <StatisticLine text="good" value ={good} />
              <StatisticLine text="neutral" value ={neutral} />
              <StatisticLine text="bad" value ={bad} />
              <StatisticLine text="all" value ={all.length} />
              <StatisticLine text="average" value ={calcAverage()} />
              <StatisticLine text="positive" value ={calcPositives()} />
            </tbody>
          </table> 
        </div>)
      }

      return (<p>No feedback given</p>)
    }

  return (
  <div>
    <h2>statistics</h2>
    {feedbacksGiven()}
  </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState([])

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all.concat(1))
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all.concat(0))
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all.concat(-1))
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={increaseGood}
        text="good"
      />
      <Button
        handleClick={increaseNeutral}
        text="neutral"
      />
      <Button
        handleClick={increaseBad}
        text="bad"
      />
      <Statistics all= {all} good= {good} bad= {bad} neutral= {neutral}/>
    </div>
  )
}

export default App
