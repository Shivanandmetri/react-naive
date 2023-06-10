import React, {createContext, useCallback, useMemo, useState} from 'react';
import axiosInstance from '../utils/axiosInstance';

export const WeatherContext = createContext();

const ContextProvider = ({children}) => {
  const [text, setText] = useState('Bangalore');
  const [weatherData, setweatherData] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const res = await axiosInstance.get(`${text}&days=5&aqi=no&alerts=no`);
      // console.log(res.data);
      setweatherData(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [text]);

  const value = useMemo(
    () => ({
      loadProducts,
      weatherData,
      text,
      setText,
    }),
    [loadProducts, weatherData, text, setText],
  );
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default ContextProvider;
