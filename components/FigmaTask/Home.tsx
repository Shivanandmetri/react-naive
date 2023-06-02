/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  const [loading, setloading] = useState(false);
  return (
    <View style={{alignSelf: 'center'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Image source={require('./images/Group.png')} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 120,
            gap: 20,
          }}>
          <Text
            style={{
              color: '#2242D8',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Hey,John
          </Text>
          <View
            style={{
              backgroundColor: '#E9ECFB',
              height: 46,
              width: 46,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('./images/IMG.png')} />
          </View>
        </View>
      </View>
      {/* cards */}
      <View
        style={{
          borderColor: '#59ACF3',
          borderWidth: 1,
          height: 200,
          width: 330,
          backgroundColor: '#F4F6FD',
          borderRadius: 20,
          marginVertical: 10,
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: 296,
            justifyContent: 'space-evenly',
          }}>
          <Image source={require('./images/john15.png')} />
          <View>
            <Text
              style={{
                color: '#2242D8',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              John ryan
            </Text>
            <Text style={{color: '#7085E6', fontSize: 15}}>Personal Card</Text>
          </View>
          <Pressable onPress={() => setloading(true)} style={styles.view}>
            <Icon name="md-ellipsis-horizontal" color="#2242D8" size={25} />
          </Pressable>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            width: 296,
            borderRadius: 20,
            height: 49,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderColor: 'rgba(34, 66, 216, 0.15)',
          }}>
          <View>
            <Pressable
              onPress={() => navigation.navigate('edit')}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Icon name="pencil" color="#2242D8" size={15} />
              <Text style={{color: '#2242D8', fontSize: 15}}>Edit</Text>
            </Pressable>
          </View>
          <View style={{height: 40, backgroundColor: '#B6C1F2', width: 1}} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Icon name="reader-outline" color="#2242D8" size={15} />
            <Text style={{color: '#2242D8'}}>Preview card</Text>
          </View>
          <View style={{height: 40, backgroundColor: '#B6C1F2', width: 1}} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Icon name="md-paper-plane-outline" color="#2242D8" size={15} />
            <Text style={{color: '#2242D8'}}>Share</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderColor: '#4CDB66',
          borderWidth: 1,
          height: 200,
          width: 330,
          backgroundColor: '#F1FCF3',
          borderRadius: 20,
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: 296,
            justifyContent: 'space-evenly',
          }}>
          <Image source={require('./images/john15.png')} />
          <View>
            <Text
              style={{
                color: '#2242D8',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              John ryan
            </Text>
            <Text style={{color: '#7085E6', fontSize: 15}}>Personal Card</Text>
          </View>
          <Pressable onPress={() => setloading(true)} style={styles.view}>
            <Icon name="md-ellipsis-horizontal" color="#2242D8" size={25} />
          </Pressable>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            width: 296,
            borderRadius: 20,
            height: 49,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderColor: 'rgba(34, 66, 216, 0.15)',
          }}>
          <View>
            <Pressable
              onPress={() => navigation.navigate('edit')}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Icon name="pencil" color="#2242D8" size={15} />
              <Text style={{color: '#2242D8', fontSize: 15}}>Edit</Text>
            </Pressable>
          </View>
          <View style={{height: 40, backgroundColor: '#B6C1F2', width: 1}} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Icon name="reader-outline" color="#2242D8" size={15} />
            <Text style={{color: '#2242D8'}}>Preview card</Text>
          </View>
          <View style={{height: 40, backgroundColor: '#B6C1F2', width: 1}} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Icon name="md-paper-plane-outline" color="#2242D8" size={15} />
            <Text style={{color: '#2242D8'}}>Share</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderColor: '#4CD2DB',
          borderWidth: 1,
          height: 200,
          width: 330,
          backgroundColor: '#F4FEFF',
          borderRadius: 20,
          marginVertical:10,
          gap: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: 296,
            justifyContent: 'space-evenly',
          }}>
          <Image source={require('./images/john15.png')} />
          <View>
            <Text
              style={{
                color: '#2242D8',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              John ryan
            </Text>
            <Text style={{color: '#7085E6', fontSize: 15}}>Personal Card</Text>
          </View>
          <Pressable onPress={() => setloading(true)} style={styles.view}>
            <Icon name="md-ellipsis-horizontal" color="#2242D8" size={25} />
          </Pressable>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            width: 296,
            borderRadius: 20,
            height: 49,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderColor: 'rgba(34, 66, 216, 0.15)',
          }}>
          <View>
            <Pressable
              onPress={() => navigation.navigate('edit')}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Icon name="pencil" color="#2242D8" size={15} />
              <Text style={{color: '#2242D8', fontSize: 15}}>Edit</Text>
            </Pressable>
          </View>
          <View style={{height: 40, backgroundColor: '#B6C1F2', width: 1}} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Icon name="reader-outline" color="#2242D8" size={15} />
            <Text style={{color: '#2242D8'}}>Preview card</Text>
          </View>
          <View style={{height: 40, backgroundColor: '#B6C1F2', width: 1}} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Icon name="md-paper-plane-outline" color="#2242D8" size={15} />
            <Text style={{color: '#2242D8'}}>Share</Text>
          </View>
        </View>
      </View>
      {/* modal box */}
      <Modal animationType="slide" transparent visible={loading}>
        <View style={styles.modal}>
          <Pressable onPress={() => setloading(false)}>
            <View
              style={{
                width: 70,
                backgroundColor: '#E9ECFB',
                height: 5,
                borderRadius: 5,
                marginTop: 20,
              }}
            />
          </Pressable>

          <View />
          <View
            style={{display: 'flex', flexDirection: 'row', gap: 20, top: 40}}>
            <View style={styles.btns}>
              <Icon name="ios-logo-rss" color="#2242D8" size={20} />
              <Text style={styles.btnc}>Write to NFC</Text>
            </View>
            <View style={styles.btns}>
              <Icon name="copy-outline" size={20} color="#2242D8" />
              <Text style={styles.btnc}>Duplicate card</Text>
            </View>
            <View style={styles.btns}>
              <Icon name="trash-outline" size={20} color="#EF4B4B" />
              <Text style={styles.btnc}>Delete card</Text>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // scan: {
  //   height: 200,
  //   width: 330,
  //   backgroundColor: '#F4F6FD',
  //   borderRadius: 20,
  //   left: 25,
  //   top: 100,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   gap: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  btnc: {color: '#000000', fontSize: 12},
  btns: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 93,
    width: 93,
    borderRadius: 20,
    gap: 10,
    backgroundColor: '#E9ECFB',
  },
  modal: {
    position: 'absolute',
    width: '100%',
    height: 183,
    backgroundColor: '#FFFFFF',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  view: {
    height: 30,
    width: 60,
    borderWidth: 1,
    borderColor: '#2242D8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
