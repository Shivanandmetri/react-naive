/* eslint-disable react-native/no-inline-styles */
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {WeatherContext} from '../weatherApp/Context';

const SunRiseSet = () => {
  const {weatherData} = useContext(WeatherContext);
  const sunRise = [
    {
      title: 'Sunrise',
      val: weatherData?.forecast?.forecastday[0]?.astro?.sunrise,
    },
    {
      title: 'Wind',
      val: `${weatherData?.current?.wind_kph} km/h`,
    },
    {
      title: 'Precipitation',
      val: `${weatherData?.current?.precip_mm} mm`,
    },
  ];
  const sunSet = [
    {
      title: 'Sunset',
      val: weatherData?.forecast?.forecastday[0]?.astro?.sunset,
    },
    {
      title: 'Pressure',
      val: `${weatherData?.current?.pressure_mb} mb`,
    },
    {
      title: 'Humidity',
      val: `${weatherData?.current?.humidity} %`,
    },
  ];
  return (
    <SafeAreaView style={{marginTop: 25}}>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sunRise}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Text style={styles.colr}>{item.title}</Text>
              <Text style={styles.txt}>{item.val}</Text>
            </View>
          )}
        />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sunSet}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Text style={styles.colr}>{item.title}</Text>
              <Text style={styles.txt}>{item.val}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SunRiseSet;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
    gap: 10,
  },
  txt: {fontSize: 18, color: '#FFFFFF', fontWeight: 'bold'},
  colr: {
    color: '#fff',
    fontSize: 18,
  },
});
