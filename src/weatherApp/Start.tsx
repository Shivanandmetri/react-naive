/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {WeatherContext} from './Context';
import Location from '../components/Location';
import HourReport from '../components/HourReport';
import SunRiseSet from '../components/SunRiseSet';

const date = new Date().toString().split(' ');
///////////Home/////////////

const Start = ({navigation}) => {
  const {weatherData, loadProducts, setText, text} = useContext(WeatherContext);
  // console.log(text);

  useEffect(() => {
    const getData = setTimeout(() => {
      loadProducts();
    }, 1500);
    return () => clearTimeout(getData);
  }, [text]);

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#59C5D0', '#4EE6F6', '#09ABF7']}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search City"
          style={styles.input}
          onChangeText={setText}
        />
        <Image
          source={require('../assets/celsius.png')}
          style={{height: 35, width: 35, tintColor: 'white'}}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#FFFFFF', fontSize: 20}}>
          {date.slice(0, 3).join(' ')}
        </Text>
        <Location
          region={weatherData?.location?.name}
          country={weatherData?.location?.country}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 15,
          paddingHorizontal: 12,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 55, color: '#FFFFFF'}}>
            {weatherData?.current?.temp_c}&deg;
          </Text>
          <Text>Feels Like {weatherData?.current?.feelslike_c}&deg;</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../assets/down-arrow.png')}
              style={{height: 20, width: 20}}
            />
            <Text>
              {weatherData?.forecast?.forecastday[0]?.day?.mintemp_c}&deg;
            </Text>
            <Image
              source={require('../assets/arrow.png')}
              style={{height: 20, width: 20}}
            />
            <Text>
              {weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c}&deg;
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={{uri: `https:${weatherData?.current?.condition?.icon}`}}
            style={{height: 150, width: 150}}
          />
        </View>
      </View>

      <Text style={styles.txt}>{weatherData?.current?.condition?.text}</Text>
      <HourReport />

      <SunRiseSet />

      <Pressable
        style={{alignItems: 'center', marginVertical: 20}}
        onPress={() => navigation.navigate('second')}>
        <Image
          source={require('../assets/arrow.png')}
          style={{height: 25, width: 25, tintColor: '#FFFFFF'}}
        />
      </Pressable>
    </LinearGradient>
  );
};

export default Start;

const styles = StyleSheet.create({
  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    gap: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 20,
    backgroundColor: '#C2E8EE',
    paddingLeft: 20,
  },
  txt: {
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
