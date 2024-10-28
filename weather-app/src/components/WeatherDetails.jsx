
import humidityImage from '../assets/images/humidity.png'
import windImage from '../assets/images/wind.png'

function WeatherDetails({humidity,windSpeed}){
    return (
        
            <div className="details">
                <div className="col">
                   <img src={humidityImage} className="colImage"/>
                   <div>
                     <p className="humidity">{humidity}%</p>
                     <p>Humidity</p>
                   </div>
                </div>
                <div className="col">
                   <img src={windImage} className="colImage"/>
                   <div>
                     <p className="wind">{windSpeed} km/h</p>
                     <p>Wind Speed</p>
                   </div>
                </div>


            </div>
       
      )
}

export default WeatherDetails;