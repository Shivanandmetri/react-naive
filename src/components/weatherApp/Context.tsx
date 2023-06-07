import React, {createContext, useCallback, useMemo, useState} from 'react';
import axiosInstance from '../../utils/axiosInstance';

export const WeatherContext = createContext();

const ContextProvider = ({children}) => {
  const [time, setTime] = useState([
    {
      time: '12 AM',
      temp: 23.8,
    },
    {
      time: '1 AM',
      temp: 23.4,
    },
    {
      time: '2 AM',
      temp: 23.2,
    },
    {
      time: '3 AM',
      temp: 22.9,
    },
    {
      time: '4 AM',
      temp: 22.8,
    },
    {
      time: '5 AM',
      temp: 22.6,
    },
    {
      time: '6 AM',
      temp: 22.6,
    },
    {
      time: '7 AM',
      temp: 22.6,
    },
    {
      time: '8 AM',
      temp: 22.6,
    },
    {
      time: '9 AM',
      temp: 22.6,
    },
    {
      time: '10 AM',
      temp: 22.6,
    },
    {
      time: '11 AM',
      temp: 22.6,
    },
    {
      time: '12 PM',
      temp: 22.6,
    },
    {
      time: '1 PM',
      temp: 22.6,
    },
    {
      time: '2 PM',
      temp: 22.6,
    },
    {
      time: '3 PM',
      temp: 22.6,
    },
    {
      time: '4 PM',
      temp: 22.6,
    },
    {
      time: '5 PM',
      temp: 22.6,
    },
    {
      time: '6 PM',
      temp: 22.6,
    },
    {
      time: '7 PM',
      temp: 22.6,
    },
    {
      time: '8 PM',
      temp: 22.6,
    },
    {
      time: '9 PM',
      temp: 22.6,
    },
    {
      time: '10 PM',
      temp: 22.6,
    },
    {
      time: '11 PM',
      temp: 22.6,
    },
  ]);
  const [sunrise, setSunrise] = useState([
    {
      title: 'Sunrise',
      val: '05:53 AM',
    },
    {
      title: 'Wind',
      val: '13 km/h',
    },
    {
      title: 'Precipitation',
      val: '0 mm',
    },
  ]);
  const [sunset, setSunset] = useState([
    {
      title: 'Sunset',
      val: '06:53 pM',
    },
    {
      title: 'Pressure',
      val: '1016 mb',
    },
    {
      title: 'Humidity',
      val: '70 %',
    },
  ]);
  const [Forecast, setForecast] = useState([
    {
      week: 'Saturday',
      img: '//cdn.weatherapi.com/weather/64x64/day/176.png',
      deg: 84.2,
      lowtemp: 72.7,
      hightemp: 98.2,
    },
    {
      week: 'Sunday',
      img: '//cdn.weatherapi.com/weather/64x64/day/176.png',
      deg: 84.2,
      lowtemp: 72.7,
      hightemp: 98.2,
    },
    {
      week: 'Monday',
      img: '//cdn.weatherapi.com/weather/64x64/day/176.png',
      deg: 84.2,
      lowtemp: 72.7,
      hightemp: 98.2,
    },
  ]);
  const [text, setText] = useState('bangalore');
  const [error, seterror] = useState(null);
  const [weatherData, setweatherData] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const res = await axiosInstance.get(`${text}&days=3&aqi=no&alerts=no`);
      console.log(res.data);
      setweatherData(res.data);
      console.log(res.data.forecast.forecastday[0].day.condition.icon);
      console.log(res.data.forecast.forecastday[1].day.condition.icon);
      setForecast([
        {
          week: 'Saturday',
          img: res.data.forecast.forecastday[0].day.condition.icon,
          deg: res.data.forecast.forecastday[0].day.mintemp_c,
          lowtemp: res.data.forecast.forecastday[0].day.maxtemp_c,
          hightemp: res.data.forecast.forecastday[0].day.avgtemp_c,
        },
        {
          week: 'Sunday',
          img: res.data.forecast.forecastday[1].day.condition.icon,
          deg: res.data.forecast.forecastday[1].day.mintemp_c,
          lowtemp: res.data.forecast.forecastday[1].day.maxtemp_c,
          hightemp: res.data.forecast.forecastday[1].day.avgtemp_c,
        },
        {
          week: 'Monday',
          img: res.data.forecast.forecastday[2].day.condition.icon,
          deg: res.data.forecast.forecastday[2].day.mintemp_c,
          lowtemp: res.data.forecast.forecastday[2].day.maxtemp_c,
          hightemp: res.data.forecast.forecastday[2].day.avgtemp_c,
        },
      ]);
      setTime([
        {
          time: '12 AM',
          temp: res.data.forecast.forecastday[0].hour[0].temp_c,
        },
        {
          time: '1 AM',
          temp: res.data.forecast.forecastday[0].hour[1].temp_c,
        },
        {
          time: '2 AM',
          temp: res.data.forecast.forecastday[0].hour[2].temp_c,
        },
        {
          time: '3 AM',
          temp: res.data.forecast.forecastday[0].hour[3].temp_c,
        },
        {
          time: '4 AM',
          temp: res.data.forecast.forecastday[0].hour[4].temp_c,
        },
        {
          time: '5 AM',
          temp: res.data.forecast.forecastday[0].hour[5].temp_c,
        },
        {
          time: '6 AM',
          temp: res.data.forecast.forecastday[0].hour[6].temp_c,
        },
        {
          time: '7 AM',
          temp: res.data.forecast.forecastday[0].hour[7].temp_c,
        },
        {
          time: '8 AM',
          temp: res.data.forecast.forecastday[0].hour[8].temp_c,
        },
        {
          time: '9 AM',
          temp: res.data.forecast.forecastday[0].hour[9].temp_c,
        },
        {
          time: '10 AM',
          temp: res.data.forecast.forecastday[0].hour[10].temp_c,
        },
        {
          time: '11 AM',
          temp: res.data.forecast.forecastday[0].hour[11].temp_c,
        },
        {
          time: '12 PM',
          temp: res.data.forecast.forecastday[0].hour[12].temp_c,
        },
        {
          time: '1 PM',
          temp: res.data.forecast.forecastday[0].hour[13].temp_c,
        },
        {
          time: '2 PM',
          temp: res.data.forecast.forecastday[0].hour[14].temp_c,
        },
        {
          time: '3 PM',
          temp: res.data.forecast.forecastday[0].hour[15].temp_c,
        },
        {
          time: '4 PM',
          temp: res.data.forecast.forecastday[0].hour[16].temp_c,
        },
        {
          time: '5 PM',
          temp: res.data.forecast.forecastday[0].hour[17].temp_c,
        },
        {
          time: '6 PM',
          temp: res.data.forecast.forecastday[0].hour[18].temp_c,
        },
        {
          time: '7 PM',
          temp: res.data.forecast.forecastday[0].hour[19].temp_c,
        },
        {
          time: '8 PM',
          temp: res.data.forecast.forecastday[0].hour[20].temp_c,
        },
        {
          time: '9 PM',
          temp: res.data.forecast.forecastday[0].hour[21].temp_c,
        },
        {
          time: '10 PM',
          temp: res.data.forecast.forecastday[0].hour[22].temp_c,
        },
        {
          time: '11 PM',
          temp: res.data.forecast.forecastday[0].hour[23].temp_c,
        },
      ]);
      setSunrise([
        {
          title: 'Sunrise',
          val: res.data.forecast.forecastday[0].astro.sunrise,
        },
        {
          title: 'Wind',
          val: `${res.data.current.wind_kph} km/h`,
        },
        {
          title: 'Precipitation',
          val: `${res.data.current.precip_mm} mm`,
        },
      ]);
      setSunset([
        {
          title: 'Sunset',
          val: res.data.forecast.forecastday[0].astro.sunset,
        },
        {
          title: 'Pressure',
          val: `${res.data.current.pressure_mb} mb`,
        },
        {
          title: 'Humidity',
          val: `${res.data.current.humidity} %`,
        },
      ]);
      // console.log(forecast);
      // console.log(res.data.forecast);
    } catch (err) {
      seterror(error);
    }
  }, [text]);

  const value = useMemo(
    () => ({
      loadProducts,
      weatherData,
      text,
      setText,
      time,
      sunrise,
      sunset,
      Forecast,
    }),
    [
      loadProducts,
      weatherData,
      error,
      text,
      time,
      sunrise,
      sunset,
      Forecast,
      setText,
    ],
  );
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default ContextProvider;
