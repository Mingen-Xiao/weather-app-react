import './Weather.css';
import {useState} from 'react';

const API_KEY = 'e32ccd46634145978b655340231506';

const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Beijing&aqi=no`;


const Weather = () => {
    const [city, setCity] = useState('');
    const onCityInputChange = (event) => {
        const value = event.target.value;
        setCity(value);
    }

    return (
        <div>
            <h1>JR Weather App 🌤</h1>
            <input type='text' placeholder='Search city...' value={city} onChange={onCityInputChange}/>
            <button>Search</button>

        </div>
    );
}

export default Weather;