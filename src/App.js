
import React, { useState, useEffect } from 'react';

import { Weather } from './Weather.js'

import './App.css'


function App() {
  const [city, setCity] = useState('Toronto');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await Weather(city);
      setWeatherData(data);
      setIsLoading(false);
    }
    catch (err) {
      //err.message
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='app warm'>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="city"
          />
        </div>
      </main>
    </div>

  );
}

export default App;
