import './Weather.css';
import {useState} from 'react';
import { fetchWeatherByCity } from '../../services/weatherService';
import WeatherResult from './WeatherResult/WeatherResult';
import SearchCity from './SearchCity/SearchCity';

// main function
const Weather = () => {
    const [weather, setWeather] = useState(undefined); // nullable value: ''(for String), null(有东西，只不过现在没有), undefined(无符合内容)
    
    const onSearch = (weatherData) => {
        setWeather(weatherData);
    }


    

    return (
        <div>
            <h1>JR Weather App 🌤</h1>
            <SearchCity search={onSearch}/>
            {/* 以下语法=：weather ? <WeatherResult weather={weather}/> : null */}
            {/* 即：只有weather为true才返回后面的，否则返回null */}
            {weather && <WeatherResult weather={weather}/>}
        </div>
    );
}

export default Weather;