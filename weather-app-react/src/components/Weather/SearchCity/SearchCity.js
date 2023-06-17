import './SearchCity.css';
import { fetchWeatherByCity } from '../../../services/weatherService';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SearchCity = (props) => {

    const [city, setCity] = useState('');
    
    // read user input
    const onCityInputChange = (event) => {
        // event.target.value shows the user input
        const value = event.target.value;
        // set the value to 'city'
        
        setCity(value);
    }

    // function when click the search button
    // async...await：'promise'的一个语法
    // async：会把这个function return的所有东西放到'promise'里
    const onSearchButtonClick = async (event) => {
        event.preventDefault();
        const weatherData = await fetchWeatherByCity(city);
        // setWeather(weatherData);
        props.search(weatherData);
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