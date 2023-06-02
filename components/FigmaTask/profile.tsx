/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2022/164.png',
        }}
        style={{height: 380, width: '100%', backgroundColor: '#D9D9D9'}}
      />
      <View style={{paddingHorizontal: 10}}>
        <View style={styles.containers}>
          <Text style={{fontSize: 23, fontWeight: 'bold', color: '#000000'}}>
            Virat Kohli
          </Text>
          <View
            style={{
              backgroundColor: '#EAEDFB',
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.headers}>About</Text>
          <Text>
            A UX designer must have strong problem-solving skills and be able to
            identify pain points in the user journey and find solutions to
            improve the user experience.{' '}
          </Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.headers}>Personal Details</Text>
          <View style={styles.containers}>
            <Text>Email address:</Text>
            <Text style={styles.det}>Virat@123.gmail.com</Text>
          </View>
          <View style={styles.containers}>
            <Text>Mobile No:</Text>
            <Text style={styles.det}>8465495655</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.headers}>Company details</Text>
          <View style={styles.containers}>
            <Text>Company name:</Text>
            <Text style={styles.det}>BufferZero</Text>
          </View>
          <View style={styles.containers}>
            <Text>Designation:</Text>
            <Text style={styles.det}>Developer</Text>
          </View>
          <View style={styles.containers}>
            <Text>Department:</Text>
            <Text style={styles.det}>Software</Text>
          </View>
          <View style={styles.containers}>
            <Text>Mobile No:</Text>
            <Text style={styles.det}>+1236547892</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 10, gap: 10}}>
          <Text style={styles.headers}>Contact & Social links</Text>
          <View style={styles.contContainer}>
            <View>
              <Icon name="call-outline" size={30} color={'#2242D8'} />
            </View>
            <View>
              <View style={styles.containers}>
                <Text style={{color: '#2242D8'}}>+123454345</Text>
                <Text style={{color: '#768AE7'}}>(for work)</Text>
              </View>
              <View style={styles.containers}>
                <Text style={{color: '#2242D8'}}>+123454345</Text>
                <Text style={{color: '#768AE7'}}>(WhatsApp only)</Text>
              </View>
            </View>
          </View>
          <View style={styles.contContainer}>
            <Icon name="ios-link" size={30} color={'#2242D8'} />
            <Text style={{color: '#768AE7'}}>(product web)</Text>
          </View>
        </View>
        <View style={styles.contContainer}>
          <View>
            <Icon name="ios-logo-linkedin" size={30} color={'#2242D8'} />
            <Text style={{color: '#2242D8'}}>rynjohn12</Text>
          </View>
          <Text style={{color: '#768AE7'}}>(Product Page)</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Pressable style={styles.share}>
            <Text style={styles.btn}>Share contact</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headers: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  containers: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contContainer: {
    backgroundColor: '#F5F7FF',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  share: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2422E8',
    width: 280,
    height: 55,
    marginBottom: 35,
    borderRadius: 20,
  },
  btn: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: '#000000',
  },
  det: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 16,
  },
});
