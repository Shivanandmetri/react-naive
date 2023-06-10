/* eslint-disable react-native/no-inline-styles */
import {View, Pressable, Image, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {WeatherContext} from './Context';
import Location from '../components/Location';
import HourReport from '../components/HourReport';
import SunRiseSet from '../components/SunRiseSet';
import Forecast from '../components/Forecast';

////////////ForecastPage/////////////

const Second = ({navigation}) => {
  const {weatherData} = useContext(WeatherContext);
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#59C5D0', '#4EE6F6', '#09ABF7']}>
      <SafeAreaView>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Pressable onPress={() => navigation.navigate('start')}>
            <Image
              source={require('../assets/down-arrow.png')}
              style={{height: 25, width: 25, tintColor: '#FFFFFF'}}
            />
          </Pressable>
          <Location
            region={weatherData?.location?.name}
            country={weatherData?.location?.country}
          />
        </View>

        <HourReport />
        <Forecast />
        <SunRiseSet />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Second;
