/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
      }}>
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

const styles = StyleSheet.create({});
