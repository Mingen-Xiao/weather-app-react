// copied API KEY from website Weather Api
const API_KEY = 'e32ccd46634145978b655340231506';

// copied URL link from website Weather Api
const FETCH_CITY_WEATHER_URL = `http://api.weatherapi.com/v1/current.json`;

// fetch本身跟async await没关系，我们之所以能用async await是因为fetch return了promise（async await跟promise基本是一回事）
export const fetchWeatherByCity = async (city) => {
    const url = new URL(FETCH_CITY_WEATHER_URL);

    // 把key放进URL，实现参数化Parameter，如`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Beijing&aqi=no`
    url.searchParams.append('key', API_KEY);
    url.searchParams.append('q', city);
    url.searchParams.append('aqi', 'false');

    // 'fetch' return一个什么类型的东西？: promise（一个用来处理异步请求的东西）
    // await：把fetch里面的一个参数直接拿出来
    const response = await fetch(url);
    // .json()这个function还会return一个'promise'
    // console.log(response.json());
    // 相当于要return两个promise才会拿到URL里面的payload信息
    const data = await response.json();
    console.log(data);

    return data;

}