/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Modal} from 'react-native';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Setting({navigation}) {
  const [loading, setloading] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: '#2242D8',
          marginTop: 20,
          left: 30,
        }}>
        Settings
      </Text>
      <View style={styles.settingProfile} />
      <View style={{marginTop: 20, gap: 10, width: 325, left: 30}}>
        <View style={styles.setting}>
          <Text style={{color: '#2242D8', fontSize: 20, flex: 1}}>Profile</Text>
          <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
        </View>
        <View style={styles.setting}>
          <Text style={{color: '#2242D8', fontSize: 20, flex: 1}}>
            Share app
          </Text>
          <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
        </View>
        <View style={styles.setting}>
          <Text style={{color: '#2242D8', fontSize: 20, flex: 1}}>Rate Us</Text>
          <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
        </View>
        <View style={styles.setting}>
          <Text style={{color: '#2242D8', fontSize: 20, flex: 1}}>
            About app
          </Text>
          <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
        </View>
        <View style={styles.setting}>
          <Text style={{color: '#2242D8', fontSize: 20, flex: 1}}>
            Contact us
          </Text>
          <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
        </View>
        <View style={styles.setting}>
          <Text style={{color: '#2242D8', fontSize: 20, flex: 1}}>
            Privacy Policy
          </Text>
          <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
        </View>
      </View>
      <Pressable
        onPress={() => {
          setloading(true);
        }}>
        <Text style={{color: '#EF4B4B', fontSize: 20, left: 30, marginTop: 20}}>
          Logout?
        </Text>
      </Pressable>
      <View style={{flex: 1}}>
        <Modal animationType="slide" transparent visible={loading}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              bottom: 0,
              height: 300,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <Text style={{fontSize: 20, color: '#2242D8', fontWeight: 'bold'}}>
              Are You Sure want to logout?
            </Text>
            <Text style={{color: '#7286E6', textAlign: 'center'}}>
              You will need to again enter Your details to login
            </Text>
            <Pressable
              style={{
                borderWidth: 1,
                borderRadius: 20,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                width: 280,
                backgroundColor: '#2242D8',
                borderColor: '#2242D8',
              }}
              onPress={() => {
                navigation.navigate('WelcomePage');
                setloading(false);
              }}>
              <Text style={{fontSize: 16, color: 'white'}}>Yes,I want to</Text>
            </Pressable>
            <Pressable
              style={{
                borderWidth: 1,
                borderRadius: 20,
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                width: 280,
                borderColor: '#2242D8',
              }}
              onPress={() => setloading(false)}>
              <Text style={{fontSize: 16, color: '#2242D8'}}>
                No,I don't want to
              </Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  setting: {
    borderRadius: 20,
    height: 60,
    backgroundColor: '#EAEDFB',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  settingProfile: {
    height: 100,
    width: 325,
    left: 30,
    borderWidth: 2,
    borderColor: '#2242D8',
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
  },
});
