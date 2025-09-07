import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [userEnteredCity, setUserEnteredCity] = useState("");
  const [currentCity, setCurrentCity] = useState(""); 
  

  // ================== Option 1: ================== //
  //    Triggering the fetch from the button click   //
  // function fetchData() {
  //   fetch(`http://api.weatherapi.com/v1/current.json?key=${'add your actual api key in here instead'}&q=${userEnteredCity}&aqi=no`)
  //   .then((res) => res.json())
  //   .then((result) =>{ 
  //     // console.log(`API data: ${result}`);
  //     // console.log(`City name: ${result.location.name}`);
  //     // console.log(`Temperature: ${result.current.temp_c}`)
  //     setWeatherData(result);
  //   })
  //   .catch((err) => console.log(err))
  // }

  function handleChange(event) {
    setUserEnteredCity(event.target.value);
  }

  function handleClick() {
    setCurrentCity(userEnteredCity);
    setUserEnteredCity("");
  }


  // ================== Option 2: ================== //
  //    Using a useEffect to trigger the fetch       //
  // Using the .then() syntax
  // useEffect(() => {
  //   fetch(`http://api.weatherapi.com/v1/current.json?key=${'add your actual api key in here instead'}&q=${currentCity}&aqi=no`)
  //   .then((res) => res.json())
  //   .then((result) => setWeatherData(result))
  //   .catch((err) => console.log(err))

  // }, [currentCity])


  // ================== Option 3: ================== //
  //    CHALLENGE - using the async await syntax     //
  // useEffect(() => {

  //   async function fetchData() {
  //     try {
  //       // Try to fetch the data
  //       const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${'add your actual api key in here instead'}&q=${currentCity}&aqi=no`)

  //       if (!response.ok) {
  //         throw new Error("Weather data couldn't be fetched, try looking outside instead");
  //       }

  //       const result = await response.json();
  //       setWeatherData(result);

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   fetchData();

  // }, [currentCity])


  // ================== Option 4: ================== //
  //    Using geolocation for the initial fetch      //
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      if (currentCity === "") {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${'replace with your api key'}&q=${latitude},${longitude}&aqi=no`)
        .then((res) => res.json())
        .then((result) => setWeatherData(result))
        .catch((err) => console.log(err))

      } else {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${'replace with your api key'}&q=${currentCity}&aqi=no`)
        .then((res) => res.json())
        .then((result) => setWeatherData(result))
        .catch((err) => console.log(err))
      }

    })

  }, [currentCity])


  useEffect(() => {
    console.log(weatherData, userEnteredCity)
  }, [weatherData, userEnteredCity])

  return (
    <>
      <h1>Weather App</h1>
      <label>Enter a city:</label>
      <br />
      <input onChange={handleChange} value={userEnteredCity} /> 
      <br /><br />
      <button onClick={handleClick}>Search</button>

      {/* Render out the data */}
      {/* <p>{weatherData && weatherData.location.name}&apos;s temperature is {weatherData && weatherData.current.temp_c}℃</p>
      <h5>It&apos;s {weatherData && weatherData.current.condition.text}</h5>
      <img src={weatherData && weatherData.current.condition.icon} alt="weather-icon" /> */}

      {weatherData && (
        <>
          <p>{weatherData.location.name}&apos;s temperature is {weatherData.current.temp_c}℃</p>
          <h5>It&apos;s {weatherData.current.condition.text}</h5>
          <img src={weatherData.current.condition.icon} alt="weather-icon" />
        </> 
      )}
    </>
  )
}

export default App