import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {WeatherContext} from '../weatherApp/Context';

const HourReport = () => {
  const {weatherData} = useContext(WeatherContext);
  const timeData = [
    {
      time: '12 AM',
    },
    {
      time: '1 AM',
    },
    {
      time: '2 AM',
    },
    {
      time: '3 AM',
    },
    {
      time: '4 AM',
    },
    {
      time: '5 AM',
    },
    {
      time: '6 AM',
    },
    {
      time: '7 AM',
    },
    {
      time: '8 AM',
    },
    {
      time: '9 AM',
    },
    {
      time: '10 AM',
    },
    {
      time: '11 AM',
    },
    {
      time: '12 PM',
    },
    {
      time: '1 PM',
    },
    {
      time: '2 PM',
    },
    {
      time: '3 PM',
    },
    {
      time: '4 PM',
    },
    {
      time: '5 PM',
    },
    {
      time: '6 PM',
    },
    {
      time: '7 PM',
    },
    {
      time: '8 PM',
    },
    {
      time: '9 PM',
    },
    {
      time: '10 PM',
    },
    {
      time: '11 PM',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={timeData}
        renderItem={({item, index}) => (
          <View style={styles.box}>
            <Text style={styles.hour}> {item.time}</Text>
            <Text style={styles.temp}>
              {weatherData?.forecast?.forecastday[0]?.hour[index]?.temp_c}&deg;
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default HourReport;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#fff',
    marginTop: 20,
  },
  hour: {color: '#fff'},
  temp: {fontSize: 18, color: '#fff', fontWeight: 'bold'},
  box: {paddingHorizontal: 15, marginVertical: 10, gap: 10},
});
