/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable, Image, FlatList} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {WeatherContext} from './Context';

const Second = ({navigation}) => {
  const {weatherData, time, sunrise, sunset, Forecast} =
    useContext(WeatherContext);
  // console.log(forecast);
  console.log('second page', Forecast);
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#59C5D0', '#4EE6F6', '#09ABF7']}>
      <View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Pressable onPress={() => navigation.navigate('start')}>
            <Image
              source={require('../../assets/down-arrow.png')}
              style={{height: 25, width: 25, tintColor: '#FFFFFF'}}
            />
          </Pressable>
          <Text style={{fontSize: 30, color: '#FFFFFF'}}>
            {weatherData.location.name}
          </Text>
          <Text style={{color: '#FFFFFF'}}>{weatherData.location.country}</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: '#FFFFFF',
            marginTop: 15,
          }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={time}
            renderItem={({item}) => (
              <View
                style={{
                  paddingHorizontal: 15,
                  marginVertical: 10,
                  gap: 10,
                }}>
                <Text style={{color: '#FFFFFF'}}> {item.time}</Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                  }}>
                  {item.temp}&deg;
                </Text>
              </View>
            )}
          />
        </View>

        <View>
          <FlatList
            // horizontal
            showsHorizontalScrollIndicator={false}
            data={Forecast}
            renderItem={({item}) => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 30,
                }}>
                <Text>{item.week}</Text>
                <Image
                  source={{uri: `https:${item.img}`}}
                  style={{height: 20, width: 20}}
                />
                <Text>{item.deg}</Text>
                <Text>{item.lowtemp}</Text>
                <Text>{item.hightemp}</Text>
              </View>
            )}
          />
        </View>
        <View style={{marginTop: 40}}>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={sunrise}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingHorizontal: 20,
                    marginVertical: 10,
                    gap: 10,
                  }}>
                  <Text> {item.title}</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                    }}>
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
              data={sunset}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingHorizontal: 20,
                    marginVertical: 10,
                    gap: 10,
                  }}>
                  <Text> {item.title}</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                    }}>
                    {item.val}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Second;
