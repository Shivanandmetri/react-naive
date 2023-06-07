/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {WeatherContext} from './Context';

const Home = ({navigation}) => {
  const {loadProducts} = useContext(WeatherContext);
  setTimeout(() => navigation.navigate('start'), 1000);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={styles.weather}>
      <Image
        source={require('../../assets/weatherapp.png')}
        style={{height: 100, width: 100}}
      />
      <Image
        source={require('../../assets/weatherapi.png')}
        style={{height: 100, width: 100, bottom: 0, position: 'absolute'}}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  weather: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
});
