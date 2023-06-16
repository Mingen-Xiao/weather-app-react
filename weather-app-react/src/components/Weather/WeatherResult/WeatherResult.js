import './WeatherResult.css';

const WeatherResult = (props) => {
    return (
        // JSON.stringify：将 JavaScript 值转换为 JSON 字符串
        <div>
            {JSON.stringify(props.weather)}
        </div>

    );
}


export default WeatherResult;