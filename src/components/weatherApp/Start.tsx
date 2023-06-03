/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Image, FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

const DATA = [
  {
    time: 12,
    temp: 23.8,
  },
  {
    time: 1,
    temp: 23.4,
  },
  {
    time: 2,
    temp: 23.2,
  },
  {
    time: 3,
    temp: 22.9,
  },
  {
    time: 4,
    temp: 22.8,
  },
  {
    time: 5,
    temp: 22.6,
  },
];

const data1 = [
  {
    title: 'Sunrise',
    val: '05:53',
  },
  {
    title: 'Wind',
    val: '13km/h',
  },
  {
    title: 'Precipitation',
    val: '0 mm',
  },
];

const data2 = [
  {
    title: 'Sunset',
    val: '06:43',
  },
  {
    title: 'Pressure',
    val: '1016 mb',
  },
  {
    title: 'Humidity',
    val: '70 %',
  },
];

const Start = () => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#59C5D0', '#4EE6F6', '#09ABF7']}>
      <View style={styles.search}>
        <TextInput placeholder="Search City" style={styles.input} />
        <Image
          source={require('../../assets/celsius.png')}
          style={{height: 35, width: 35, tintColor: 'white'}}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#FFFFFF', fontSize: 20}}>Saturday, June 3</Text>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          Bangalore
        </Text>
        <Text style={{color: '#FFFFFF'}}>India</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 15,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50, color: '#FFFFFF'}}>29&deg;</Text>
          <Text>Feels Like 29.9&deg;</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../../assets/down-arrow.png')}
              style={{height: 20, width: 20}}
            />
            <Text>22.6&deg;</Text>
            <Image
              source={require('../../assets/arrow.png')}
              style={{height: 20, width: 20}}
            />
            <Text>36.8&deg;</Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/clearsky.png')}
            style={{height: 100, width: 100}}
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginVertical: 10,
          color: '#FFFFFF',
          fontWeight: 'bold',
        }}>
        Partly cloudly
      </Text>

      <View style={styles.hrline} />
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 15, marginVertical: 10, gap: 10}}>
              <Text style={{color: '#FFFFFF'}}> {item.time} AM</Text>
              <Text
                style={{fontSize: 18, color: '#FFFFFF', fontWeight: 'bold'}}>
                {item.temp}&deg;
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.hrline} />

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 30, marginVertical: 10, gap: 10}}>
              <Text> {item.title}</Text>
              <Text
                style={{fontSize: 18, color: '#FFFFFF', fontWeight: 'bold'}}>
                {item.val}
              </Text>
            </View>
          )}
        />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 30, marginVertical: 10, gap: 10}}>
              <Text> {item.title}</Text>
              <Text
                style={{fontSize: 18, color: '#FFFFFF', fontWeight: 'bold'}}>
                {item.val}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Image
          source={require('../../assets/arrow.png')}
          style={{height: 20, width: 20}}
        />
      </View>
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
    padding: 10,
  },
  hrline: {
    height: 1,
    width: '100%',
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
  },
});
