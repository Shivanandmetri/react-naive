/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {WeatherContext} from './Context';

////////FlashPage///////

const Home = ({navigation}) => {
  const {loadProducts} = useContext(WeatherContext);
  setTimeout(() => navigation.navigate('start'), 1500);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/weatherapp.png')}
        style={{height: 100, width: 100}}
      />
      <Image source={require('../assets/weatherapi.png')} style={styles.logo} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: 80,
    width: 100,
    bottom: 0,
    position: 'absolute',
  },
});
