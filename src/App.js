
import React, { useState, useEffect } from 'react';


import './App.css'



const App = () => {

const[city,setCity] = useState('')
const[weather,setWeather] = useState(null);

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
    <main>
      <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setCity(e.target.value)}
          value={city}
          onKeyPress={onPressEnter}
        />
      </div>
    </main>
  </div>
  );
};

export default App;