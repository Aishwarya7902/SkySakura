
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';


function App() {
  const [weatherData,setWeatherData]=useState(null);
  const [error,setError]=useState(null);

  const checkWeather= async (city) =>{
    const apiKey = "530381ea8deda72a82b732af57e08043";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    
    try{
      const response=await fetch(apiURL)
      if(!response.ok) throw new Error("City Not Found")
      
      const responseData =await response.json();
      setWeatherData(responseData);
      setError(null);
    }
    catch(err){
      setError(err.message);
      setWeatherData(null);
    }
  }


  return (
    <div className="card">
      <SearchBar onSearch={checkWeather}/>
      {error && <p>{error}</p>}
      {weatherData && <WeatherCard data={weatherData}/>}
      
    </div>
  )
}

export default App
