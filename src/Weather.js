

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'api.openweathermap.org/data/2.5/weather?';




const Weather = async (city) => {

    try {
        const { data } = await axios.get(`${BASE_URL}q=${city}& appid=${API_KEY}`)
        return data;
    } catch (err) { throw err; }
}

export default Weather;
