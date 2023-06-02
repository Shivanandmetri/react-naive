/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{width: 325, height: 67, marginTop: 16}}>
        <Text style={styles.sign}>Login</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 18,
            alignItems: 'center',
          }}>
          <Text style={{color: '#2242D8', fontSize: 40}}>Welcome back</Text>
          <Image
            style={{height: 30, width: 30, gap: 18}}
            source={require('./hand.png')}
          />
        </View>
        <Text style={{color: '#8899EA', fontSize: 12}}>
          Enter your Email and password to continue
        </Text>
      </View>
      <View style={{marginTop: 50, gap: 15, width: '85%'}}>
        <View style={styles.input}>
          <Text style={{color: 'rgba(34, 66, 216, 0.7)', paddingLeft: 5}}>
            Email address
          </Text>
          <TextInput placeholder="Email Address" />
        </View>
        <View style={styles.pass}>
          <View style={{marginTop: 15}}>
            <Text style={{color: 'rgba(34, 66, 216, 0.7)', paddingLeft: 5}}>
              Password
            </Text>
            <TextInput placeholder="Password" />
          </View>
          <View>
            <Icon name="eye-off" size={30} />
          </View>
        </View>
      </View>
      <Text
        style={{
          left: -90,
          color: '#2242D8',
          marginTop: 12,
          fontSize: 14,
          fontWeight: 'bold',
        }}>
        Forgot password?
      </Text>
      <View style={styles.or}>
        <View style={{height: 2, width: 180, backgroundColor: '#EBEEFC'}} />
        <Text style={{color: '#2242D8'}}>Or</Text>
        <View style={{height: 2, width: 180, backgroundColor: '#EBEEFC'}} />
      </View>
      <Text
        style={{
          marginTop: 60,
          fontSize: 18,
          color: '#2242D8',
          fontWeight: 'bold',
        }}>
        Login with Mobile No
      </Text>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 123}}>
        <Text style={{fontFamily: 'Plus Jakarta Display'}}>
          Don’t have an account?
        </Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#2242D8', fontWeight: 'bold'}}>Sign up</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.nxtBtn}
        onPress={() => navigation.navigate('login')}>
        <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '500'}}>
          Login
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  sign: {
    color: '#8899EA',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 14,
    marginTop: 5,
  },
  input: {
    height: 70,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: 'rgba(34, 66, 216, 0.17)',
  },
  pass: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: 'rgba(34, 66, 216, 0.17)',
  },
  or: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  nxtBtn: {
    width: 280,
    height: 60,
    backgroundColor: '#2242D8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
});
