import './WeatherResult.css';

const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
}

const WeatherResult = (props) => {
    // 从JSON信息里提取内容，并且location转成location
    const location = props.weather.location;
    // 从JSON信息里提取内容，并且current转成weather
    const weather = props.weather.current;
    // JavaScript读时间的方法
    const dateTime = new Date(location.localtime);
    
    return (
        <div className='weather-result'>
            <div>
                <h2>{location.name}, {location.region}</h2>
                <p>{dateTime.toLocaleDateString('en-AU', options)}</p>
            </div>
            
            <ul className='weather-info'>
                <li>
                    {/* 从JSON信息里提取内容 */}
                    <img src={weather.condition.icon} alt={weather.condition.text}/>
                    {/* 从JSON信息里提取内容 */}
                    <p>{weather.condition.text}</p>
                </li>
                <li>
                    <p>Temp: {weather.temp_c} ℃</p>
                </li>
                <li>
                    <p>Wind: {weather.wind_kph} km/h</p>


                </li>
            </ul>
            
            {/* JSON.stringify：将 JavaScript 值转换为 JSON 字符串
            <div>
                {JSON.stringify(props.weather)}
            </div> */}

        </div>

    );
}

export default WeatherResult;