
import React, { useState, useEffect } from 'react';

import './App.css'
const API_KEY = '133d63b6fb36bb4cfa302d11a24ad289'
const BASE_URL = 'api.openweathermap.org/data/2.5/weather?';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    console.log("city----->"+city)
fetch(`${BASE_URL}q=${city}&appid=${API_KEY}`)
.then(res=>{
  console.log(  res)
  res.json()
  
})
.then(res=>{
  console.log(  res)
   setWeatherData(res);
  console.log("weather------->"+weatherData.coord)

})
.catch(e=>console.log(e))

  }, [])




  return (
    <div className='app warm'>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="city"
            value = {city}
            onChange={e=>setCity(e.target.value)}
          />
          <button type="submit">sub</button>
          <p>{weatherData}</p>
        </div>
      </main>
    </div>

  );
}

export default App;
