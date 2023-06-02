/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Checkbox from 'expo-checkbox';

const SignUp = ({navigation}) => {
  const data = ['Name', 'Email Address', 'Password', 'Confirm Password'];
  return (
    <View style={{alignSelf: 'center'}}>
      <Text style={styles.sign}>Sign up</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 18,
          alignItems: 'center',
        }}>
        <Text style={{color: '#2242D8', fontSize: 40}}>Welcome to App</Text>
        <Image
          style={{height: 30, width: 30, gap: 18}}
          source={require('./hand.png')}
        />
      </View>
      <Text style={{color: '#8899EA', fontSize: 12}}>
        Create your account to make your first business card
      </Text>
      <View style={{marginTop: 52, marginBottom: 29}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.inputContainer}>
              <Text style={styles.placeholderTop}>{item}</Text>
              <TextInput style={styles.placeholderBottom} placeholder={item} />
            </View>
          )}
        />
      </View>
      <View style={styles.TC}>
        <Checkbox
          style={{borderWidth: 1, borderRadius: 4, height: 23, width: 23}}
        />
        <Text style={styles.TCtext}>I accepts the terms & conditions</Text>
      </View>
      <View style={styles.alreadyExist}>
        <Text style={{fontSize: 12}}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('login')}>
          <Text style={{fontSize: 12, color: '#2242D8', fontWeight: '500'}}>
            Login
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.nxtBtn}
        onPress={() => navigation.navigate('login')}>
        <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    width: 325,
    height: 67,
    marginBottom: 10,
    paddingVertical: 15,
    borderRadius: 20,
    borderColor: '#2242D8B2',
    paddingHorizontal: 25,
  },
  placeholderTop: {
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 5,
    color: '#2242D8',
  },
  placeholderBottom: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2242D8',
  },
  sign: {
    color: '#8899EA',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 14,
    marginTop: 5,
  },
  TC: {
    paddingHorizontal: 27,
    width: 325,
    height: 67,
    position: 'absolute',
    top: 430,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  TCtext: {
    fontSize: 12,
    fontWeight: '400',
    color: '#7C7C7C',
  },
  alreadyExist: {
    position: 'absolute',
    top: 570,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  nxtBtn: {
    width: 280,
    height: 55,
    backgroundColor: '#2242D8',
    position: 'absolute',
    top: 600,
    alignSelf: 'center',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
