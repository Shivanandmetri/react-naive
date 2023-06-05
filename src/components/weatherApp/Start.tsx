/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
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

const data3 = [
  {
    week: 'Saturday',
    img: require('../../assets/sun.png'),
    deg: 84.2,
    lowtemp: 72.7,
    hightemp: 98.2,
  },
  {
    week: 'Sunday',
    img: require('../../assets/weather.png'),
    deg: 84.2,
    lowtemp: 72.7,
    hightemp: 98.2,
  },
  {
    week: 'Monday',
    img: require('../../assets/heavy-rain.png'),
    deg: 84.2,
    lowtemp: 72.7,
    hightemp: 98.2,
  },
];

const Start = () => {
  const [modalbox, setmodalbox] = useState(false);
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

      <View
        style={{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: '#FFFFFF',
        }}>
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

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 20, marginVertical: 10, gap: 10}}>
              <Text> {item.title}</Text>
              <Text
                style={{fontSize: 18, color: '#FFFFFF', fontWeight: 'bold'}}>
                {item.val} AM
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
            <View style={{paddingHorizontal: 20, marginVertical: 10, gap: 10}}>
              <Text> {item.title}</Text>
              <Text
                style={{fontSize: 18, color: '#FFFFFF', fontWeight: 'bold'}}>
                {item.val} AM
              </Text>
            </View>
          )}
        />
      </View>
      <Pressable
        style={{alignItems: 'center', marginVertical: 20}}
        onPress={() => setmodalbox(!modalbox)}>
        <Image
          source={require('../../assets/arrow.png')}
          style={{height: 25, width: 25, tintColor: '#FFFFFF'}}
        />
      </Pressable>

      {/* Modal box start */}

      <Modal transparent={true} visible={modalbox} animationType="slide">
        <LinearGradient
          style={{flex: 1}}
          colors={['#59C5D0', '#4EE6F6', '#09ABF7']}>
          <View>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Pressable onPress={() => setmodalbox(!modalbox)}>
                <Image
                  source={require('../../assets/down-arrow.png')}
                  style={{height: 25, width: 25, tintColor: '#FFFFFF'}}
                />
              </Pressable>
              <Text style={{fontSize: 30, color: '#FFFFFF'}}>Bangalore</Text>
              <Text style={{color: '#FFFFFF'}}>India</Text>
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
                data={DATA}
                renderItem={({item}) => (
                  <View
                    style={{
                      paddingHorizontal: 15,
                      marginVertical: 10,
                      gap: 10,
                    }}>
                    <Text style={{color: '#FFFFFF'}}> {item.time} AM</Text>
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
                data={data3}
                renderItem={({item}) => (
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: 30,
                    }}>
                    <Text>{item.week}</Text>
                    <Image source={item.img} style={{height: 20, width: 20}} />
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
                  data={data1}
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
                        {item.val} AM
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
                        {item.val} AM
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </Modal>

      {/* Modal box end */}
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
});
