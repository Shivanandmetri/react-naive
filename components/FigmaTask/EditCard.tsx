import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import General from './TopBarPages/General';
import Display from './TopBarPages/Display';
import Links from './TopBarPages/Links';

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: '#EEEEEE',
    paddingBottom: 10,
    top: 10,
  },
  closeBox: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEDFB',
    borderRadius: 15,
  },
  saveBox: {
    backgroundColor: '#EAEDFB',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 30,
    borderRadius: 15,
  },
});

const Tab = createMaterialTopTabNavigator();

const EditCard = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <View style={styles.closeBox}>
          <Icon name="close" size={25} color="#2242D8" />
        </View>
        <Text style={{color: '#2242D8', fontSize: 18, fontWeight: 'bold'}}>
          Edit card
        </Text>
        <TouchableOpacity style={styles.saveBox}>
          <Text style={{color: '#2242D8', fontSize: 14, fontWeight: 'bold'}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            backgroundColor: '#2242D8',
            padding: 10,
            borderRadius: 20,
            width: 100,
            fontSize: 14,
            fontWeight: 'bold',
          },
          swipeEnabled: false,
        }}>
        <Tab.Screen name="General" component={General} />
        <Tab.Screen name="Display" component={Display} />
        <Tab.Screen name="Links" component={Links} />
      </Tab.Navigator>
    </View>
  );
};

export default EditCard;
