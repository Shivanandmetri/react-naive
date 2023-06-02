/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.wel}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 25,
          marginTop: 30,
        }}>
        Let's make your first digital business card
      </Text>
      <View style={styles.prof}>
        <View style={styles.img}>
          <Image source={require('./prof.png')} />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 20,
            height: 50,
            width: 150,
            backgroundColor: '#7286E6',
            borderColor: '#7286E6',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFFFFF'}}>Ryan john</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginTop: 20,
            height: 50,
            width: 150,
            backgroundColor: '#F5F7FF',
            borderColor: '#7286E6',
            alignItems: 'center',
            justifyContent: 'center',
            left: 25,
          }}>
          <Text>software engineer</Text>
          <Text style={{color: '#2242DA'}}>At Google</Text>
        </View>
        <View
          style={{
            borderRadius: 70,
            marginTop: 20,
            height: 100,
            width: 250,
            backgroundColor: '#F5F7FF',
            alignItems: 'center',
            justifyContent: 'center',
            left: 8,
          }}>
          <Text style={{textAlign: 'center'}}>
            I’m ryan software engineer at Google and here is my digital business
            card with all my career and personal details with only the best app
          </Text>
        </View>
      </View>
      <View style={styles.popup}>
        <View
          style={{
            height: 5,
            width: 50,
            backgroundColor: '#E6ECFF',
            position: 'absolute',
            borderRadius: 24,
            top: 20,
            left: 180,
          }}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
            gap: 20,
          }}>
          <Pressable
            onPress={() => navigation.navigate('Signup')}
            style={{
              backgroundColor: '#2242D8',
              height: 50,
              width: 300,
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
              Sign up
            </Text>
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate('login')}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              Login to App
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
            gap: 15,
          }}>
          <Pressable style={styles.btn}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                style={{height: 20, width: 20}}
                source={require('./google.png')}
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: '#2242D8',
                  fontWeight: 'bold',
                }}>
                Continue with Google
              </Text>
            </View>
          </Pressable>
          <Pressable style={styles.btn}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('./facebook.png')}
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: '#2242D8',
                  fontWeight: 'bold',
                }}>
                Continue with Facebook
              </Text>
            </View>
          </Pressable>
          <Pressable style={styles.btn}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('./apple.png')}
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: '#2242D8',
                  fontWeight: 'bold',
                }}>
                Continue with Apple
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  wel: {
    backgroundColor: '#2242DA',
    width: '100%',
    height: '100%',
  },
  prof: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    height: 336,
    width: 270,
    alignItems: 'center',
    borderTopRightRadius: 55,
    borderWidth: 4,
    borderColor: '#EBEEFC',
    top: 100,
    left: 70,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    top: -18,
    left: -28,
    position: 'absolute',
  },
  popup: {
    height: 413,
    width: '100%',
    backgroundColor: '#FFFFFF',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'absolute',
  },
  btn: {
    height: 50,
    borderWidth: 2,
    width: 300,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'rgba(34, 66, 216, 0.34)',
  },
});
