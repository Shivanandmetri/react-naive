/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  SectionList,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    title: 'A',
    data: [
      {
        img: require('./images/Ellipse787.png'),
        name: 'Aont reni',
        designation: 'co-founder at Google',
      },
      {
        img: require('./images/Ellipse788.png'),
        name: 'Anand',
        designation: 'co-founder at Google',
      },
    ],
  },
  {
    title: 'B',
    data: [
      {
        img: require('./images/Ellipse787.png'),
        name: 'Ben roy',
        designation: 'co-founder at Google',
      },
      {
        img: require('./images/Ellipse788.png'),
        name: 'Buzil ken',
        designation: 'co-founder at Google',
      },
    ],
  },
  {
    title: 'C',
    data: [
      {
        img: require('./images/Ellipse787.png'),
        name: 'Ciniz mel',
        designation: 'co-founder at Google',
      },
      {
        img: require('./images/Ellipse788.png'),
        name: 'ciliven',
        designation: 'co-founder at Google',
      },
    ],
  },
];

const renderSectionHeader = ({section}) => (
  <View
    style={{
      width: 35,
      height: 35,
      left: 25,
      backgroundColor: '#F4F6FD',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      top: 10,
    }}>
    <Text style={{fontSize: 20, color: '#2242D8', fontWeight: 'bold'}}>
      {section.title}
    </Text>
  </View>
);

const renderItem = ({item}) => (
  <View>
    <View style={styles.scan}>
      <Image source={item.img} />
      <View>
        <Text
          style={{
            color: '#2242D8',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
        <Text style={{color: '#7085E6', fontSize: 15}}>{item.designation}</Text>
      </View>
      <Pressable style={styles.view}>
        <Text style={{color: '#2242D8'}}>View</Text>
      </Pressable>
    </View>
  </View>
);

const Scanned = () => {
  return (
    <View style={{flex: 1, alignSelf: 'center'}}>
      <View
        style={{
          top: 50,
          left: 25,
          display: 'flex',
          flexDirection: 'row',
          gap: 70,
        }}>
        <View style={styles.arrow}>
          <Icon name="arrow-back" size={25} color="#2242D8" />
        </View>
        <Text
          style={{
            color: '#2242D8',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Scanned
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 7}}>
          <View style={styles.arrow}>
            <Icon name="md-add" size={25} color="#2242D8" />
          </View>
          <View style={styles.arrow}>
            <Icon name="md-pencil" size={20} color="#2242D8" />
          </View>
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.search}>
          <Icon name="search" size={25} style={styles.searchGlass} />
          <TextInput
            placeholder="Search by job,name..."
            style={styles.searchInput}
          />
        </View>
        <View style={styles.filter}>
          <View
            style={{borderColor: '#2242D8', borderWidth: 1.5, borderRadius: 5}}>
            <Icon name="swap-vertical" size={20} color="#2242D8" />
          </View>
        </View>
      </View>

      <View style={{top: 30}}>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Scanned;

const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginBottom: 25,
    marginHorizontal: 20,
    marginTop: 15,
    top: 50,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 270,
    height: 50,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
  },
  filter: {
    width: 50,
    height: 50,
    backgroundColor: '#F4F6FD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  searchGlass: {
    color: '#2242D8',
    paddingLeft: 16,
  },
  searchInput: {
    width: 200,
    color: '#757575',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 21,
  },
  arrow: {
    width: 35,
    height: 35,
    backgroundColor: '#EAEDFB',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scan: {
    height: 80,
    width: 320,
    backgroundColor: '#F4F6FD',
    justifyContent: 'center',
    borderRadius: 20,
    left: 25,
    top: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 10,
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
