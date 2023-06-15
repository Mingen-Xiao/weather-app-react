import './Weather.css';
import {useState} from 'react';

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
        </div>
    );
}

export default Weather;