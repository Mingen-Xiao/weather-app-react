import './Weather.css';
import {useState} from 'react';
import WeatherResult from './WeatherResult/WeatherResult';
import SearchCity from './SearchCity/SearchCity';
import Card from 'react-bootstrap/Card';
import Spinner from '../Spinner/Spinner';

// main function
const Weather = () => {
    const [weather, setWeather] = useState(undefined); // nullable value: ''(for String), null(有东西，只不过现在没有), undefined(无符合内容)
    const [loading, setLoading] = useState(false);
    
    // 父传子：把setState包到一个function里，然后把这个function丢到子里
    const onSearch = (weatherData) => setWeather(weatherData);
    
    let weatherResult = 'Please submit a search...'
    
    if (loading) {
        weatherResult = <Spinner/>;
    } else if (weather) {
        weatherResult = <WeatherResult weather={weather}/>;
    }

    // 父传子：把setState包到一个function里，然后把这个function丢到子里
    const onSetLoading = (loading) => setLoading(loading);
    
    return (
        <>
            <Card className="text-center weather-container">
                <Card.Header>
                    <h1>
                        JR Weather App 🌤
                    </h1>
                </Card.Header>
                <Card.Body>
                    <SearchCity search={onSearch} setLoading={onSetLoading}/>
                    {/* 以下语法=：weather ? <WeatherResult weather={weather}/> : null */}
                    {/* 即：只有weather为true才返回后面的，否则返回null */}
                    {weatherResult}
                </Card.Body>
                <Card.Footer className="text-muted">By Mingen</Card.Footer>
            </Card>
        </>
    );
}

export default Weather;