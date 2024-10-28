import { useState } from 'react';
import searchImage from '../assets/images/search.png';
function SearchBar({ onSearch }) {

  const [city, setCity] = useState("");
 
  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    } else {
      console.log("Please enter a city name.");
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className='search'>
      <input
        type="text" 
        placeholder="Enter City Name" 
        value={city} 
        onChange={(e)=>{
          setCity(e.target.value)
          
        }}
        onKeyDown={handleKeyDown}  // Trigger search on Enter
        className='searchInput' 
      />
      <button 
         className='searchButton' 
         onClick={handleSearch}>
        <img src={searchImage} className='searchImg'></img>
      </button>
    </div>
  )
}

export default SearchBar;