/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Location = ({region, country}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.region}>{region}</Text>
      <Text style={styles.country}>{country}</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  region: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 5,
  },
  country: {color: '#fff', fontSize: 14},
});
