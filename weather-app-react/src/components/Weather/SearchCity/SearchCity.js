import './SearchCity.css';
import { fetchWeatherByCity } from '../../../services/weatherService';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// props: 提取父的数据
const SearchCity = (props) => {

    const [city, setCity] = useState('');
    
    // read user input
    const onCityInputChange = (event) => {
        // event.target.value shows the user input
        const value = event.target.value;
        // set the value to 'city'
        
        setCity(value);
    }

    // call back function 被触发 when click the search button
    // async...await：'promise'的一个语法
    // async：会把这个function return的所有东西放到'promise'里
    const onSearchButtonClick = async (event) => {
        // preventDefault：避免页面reload
        event.preventDefault();
        // 开始和后台交互（花时间），所以要加loading符号给user看
        props.setLoading(true);
        try {
            // 异步操作拿到weather信息
            const weatherData = await fetchWeatherByCity(city);
            // setWeather(weatherData);
            // 用props去setState，set的是Weather里面的信息
            props.search(weatherData)
        } catch (error) {
            console.error('Failed to fetch city weather due to error: ', error);
        // 无论有没有error都会运行finally这步
        } finally {
            props.setLoading(false);
        }
    }
    
    
    
        
    return (
        <>
            <Form onSubmit={onSearchButtonClick}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Search city.."
                        value={city}
                        onChange={onCityInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Show air quality data" className='air-quality'/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            {/* <div> */}
                {/* the value is 'city', with the onChange function when user input something */}
                {/* <input type='text' placeholder='Search city...' value={city} onChange={onCityInputChange}/> */}
                {/* onClick: call function when clicked */}
                {/* <button onClick={onSearchButtonClick}>Search</button> */}
            {/* </div> */}
        </>
    );
}


export default SearchCity;   