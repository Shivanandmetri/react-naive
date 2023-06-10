import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {WeatherContext} from '../weatherApp/Context';

const date = new Date();
const day1 = date.getDay();
// console.log(day1);

const Forecast = () => {
  const {weatherData} = useContext(WeatherContext);
  const Day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'ThursDay',
    'Friday',
    'Saturday',
  ];
  const ForecastData = [
    {
      week: Day[day1],
      img: weatherData?.forecast?.forecastday[0]?.day?.condition?.icon,
      deg: weatherData?.forecast?.forecastday[0]?.day?.mintemp_c,
      lowtemp: weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c,
      hightemp: weatherData?.forecast?.forecastday[0]?.day?.avgtemp_c,
    },
    {
      week: day1 + 1 < 6 ? Day[day1 + 1] : Day[(day1 + 1) % 7],
      img: weatherData?.forecast?.forecastday[1]?.day?.condition?.icon,
      deg: weatherData?.forecast?.forecastday[1]?.day?.mintemp_c,
      lowtemp: weatherData?.forecast.forecastday[1].day.maxtemp_c,
      hightemp: weatherData?.forecast?.forecastday[1]?.day?.avgtemp_c,
    },
    {
      week: day1 + 2 < 6 ? Day[day1 + 2] : Day[(day1 + 2) % 7],
      img: weatherData?.forecast?.forecastday[2]?.day?.condition.icon,
      deg: weatherData?.forecast?.forecastday[2]?.day?.mintemp_c,
      lowtemp: weatherData?.forecast?.forecastday[2]?.day?.maxtemp_c,
      hightemp: weatherData?.forecast?.forecastday[2]?.day?.avgtemp_c,
    },
    {
      week: day1 + 3 < 6 ? Day[day1 + 3] : Day[(day1 + 3) % 7],
      img: weatherData?.forecast?.forecastday[3]?.day?.condition.icon,
      deg: weatherData?.forecast?.forecastday[3]?.day?.mintemp_c,
      lowtemp: weatherData?.forecast?.forecastday[3]?.day?.maxtemp_c,
      hightemp: weatherData?.forecast?.forecastday[3]?.day?.avgtemp_c,
    },
    {
      week: day1 + 4 < 6 ? Day[day1 + 4] : Day[(day1 + 4) % 7],
      img: weatherData?.forecast?.forecastday[4]?.day?.condition.icon,
      deg: weatherData?.forecast?.forecastday[4]?.day?.mintemp_c,
      lowtemp: weatherData?.forecast?.forecastday[4]?.day?.maxtemp_c,
      hightemp: weatherData?.forecast?.forecastday[4]?.day?.avgtemp_c,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ForecastData}
        renderItem={({item}) => (
          <View style={styles.section}>
            <Text style={styles.colr}>{item.week}</Text>
            <Image source={{uri: `https:${item.img}`}} style={styles.img} />
            <Text style={styles.colr}>{item.deg}</Text>
            <Text style={styles.colr}>{item.lowtemp}</Text>
            <Text style={styles.colr}>{item.hightemp}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 20,
  },
  img: {
    height: 20,
    width: 20,
  },
  container: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    height: 200,
  },
  colr: {
    color: '#fff',
    fontSize: 15,
  },
});
