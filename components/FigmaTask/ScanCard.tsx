/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Scan from './Camera';
import {StyleSheet} from 'react-native';

const ScanCard = ({navigation}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          color: '#2242D8',
          fontWeight: 'bold',
          marginTop: 20,
          marginLeft: 10,
        }}>
        ScanCard
      </Text>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          gap: 20,
          marginTop: 20,
          backgroundColor: '#F5F7FD',
        }}>
        <Image source={require('./scan.png')} />
        <Text style={{color: '#2242D8', fontWeight: 'bold'}}>
          Scan a new card
        </Text>
        <Text
          style={{color: '#869BFF', fontWeight: 'bold', textAlign: 'center'}}>
          Just tap on scan card to add contact from physical card{' '}
        </Text>
        <Pressable
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 20,
            width: 150,
            alignItems: 'center',
            height: 40,
            borderColor: '#869BFF',
          }}
          onPress={() => navigation.navigate('Scan')}>
          <Text style={{color: '#2242D8', fontWeight: 'bold'}}>Scan card</Text>
        </Pressable>
        <View style={styles.icon}>
          <FontAwesome5 name="user" style={styles.user} />
          <Text style={{color: '#2242D8', fontSize: 18}}>
            See scanned contacts
          </Text>
          <FontAwesome5 name="angle-right" style={styles.angle} />
        </View>
      </View>
    </View>
  );
};

export default ScanCard;

const styles = StyleSheet.create({
  icon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 80,
    backgroundColor: '#FFFFFF',
    borderColor: '#869BFF',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
  user: {
    color: '#2242D8',
    borderWidth: 1.5,
    borderColor: '#2242D8',
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    alignItems: 'center',
  },
  angle: {
    color: '#2242D8',
    fontSize: 30,
    alignItems: 'center',
  },
});
