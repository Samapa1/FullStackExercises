import { useState, useEffect } from 'react'
import axios from 'axios'

const ShowOneCountry =({onecountry}) => {
  const [weatherData, setWeatherData] = useState(null)
  const apiKeyWeather = import.meta.env.VITE_API_KEY

  const hook = () => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${onecountry.capital}&appid=${apiKeyWeather}`)
    .then(response => {
      setWeatherData(response.data)
  })
  }

  useEffect(hook, [weatherData])

  if (!weatherData) { 
    return null 
  }

  const allLanguages = Object.values(onecountry.languages)
 
    return(
      <div>
      <h2>{onecountry.name.common}</h2>
      <p>capital {onecountry.capital}</p>
      <p>area {onecountry.area}</p>
      <b>languages:</b> 
      <ul>
      {allLanguages.map(language => <li key ={language} >{language}</li>)}
      </ul>
      <img src={onecountry.flags.png} width='200' alt="Flag" />
      <h3>Weather in {onecountry.capital}</h3>
      <p>temperature {(weatherData.main.temp-273.15).toFixed(2)} celsius</p>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="WeatherIcon"/>
      <p>wind {(weatherData.wind.speed).toFixed(2)} m/s</p>
      </div>
      )
    

}

const ShowCountryNames = ({countries, setChosenLetters}) => {
  const sortedCountries = countries.sort(
    (a, b) => (a.name.common < b.name.common) ? -1 : (a.name.common > b.name.common) ? 1 : 0)

      return(
      sortedCountries.map (country => 
        <p key={country.name.common}>
        {country.name.common} <button onClick={() => setChosenLetters(country.name.common)}>show</button>
      </p>
      ))
    }


const FilterCountries = ({allCountries, chosenLetters, setChosenLetters}) => {
  if (allCountries.length >0 && chosenLetters != '') {
    const countries = allCountries.filter(country => (country.name.common.toLowerCase().includes(chosenLetters.toLowerCase())))
   

    if (countries.length>10) {
      return (<p>Too many matches, specify another filter</p>)
    }

    if (countries.length<11 && countries.length>1) {
      return (<ShowCountryNames countries={countries} setChosenLetters={setChosenLetters} />)
      }
    
    if (countries.length === 1) {
      console.log("found")
      return (<ShowOneCountry onecountry={countries[0]} />)
    }
  }
}

const App = () => {

  const [allCountries, setAllCountries] = useState([])
  const [chosenLetters, setChosenLetters] = useState('')


  const hook = () => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      setAllCountries(response.data)
  })
  }

  useEffect(hook, [])

  const chooseLetters = (event) => {
    setChosenLetters(event.target.value)
  }
  
  return (
    <div>
      <label htmlFor="name">find countries:</label>
      <input value={chosenLetters} onChange={chooseLetters} id="name"/>
      <FilterCountries allCountries={allCountries} chosenLetters={chosenLetters} setChosenLetters={setChosenLetters}/>
    </div>
      )
}
export default App
