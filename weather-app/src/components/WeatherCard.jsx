import WeatherDetails from './WeatherDetails'
import cloudImage from "../assets/images/clouds.png"
import clearImage from "../assets/images/clear.png"
import drizzleImage from "../assets/images/drizzle.png"
import snowImage from "../assets/images/snow.png"
import rainImage from "../assets/images/rain.png"
import mistImage from "../assets/images/mist.png"
function WeatherCard({ data }) {
  if (!data) {
    return <p>Loading...</p>;
  }
  const { name, main, wind, weather } = data;

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clouds":
        return cloudImage;
      case "Clear":
        return clearImage;
      case "Drizzle":
        return drizzleImage;
      case "Snow":
        return snowImage;
      case "Rain":
        return rainImage;
      case "Mist":
        return mistImage;
      default:
        return rainImage;
    }
  };
  
  return <div className="weatherCard">
     <img src={getWeatherIcon(weather[0].main)} className="weatherIcon"/>
     <h1 className="temp">{Math.round(main.temp)}°C</h1>
     <h2 className="city">{name}</h2>
     <WeatherDetails humidity={main.humidity} windSpeed={wind.speed}/>
  </div>
}

export default WeatherCard;