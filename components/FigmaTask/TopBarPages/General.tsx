import {
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';

const DATA = [
  {
    title: 'Card name',
    data: ['Work'],
  },
  {
    title: 'Personal ',
    data: ['Johnryan'],
  },
  {
    title: 'Company details',
    data: ['Company Name', 'Designation', 'Department', 'Bio'],
  },
];

const renderItem = ({item}) => (
  <View style={{marginHorizontal: 20, marginVertical: 10, gap: 10}}>
    <TextInput
      placeholder={item}
      style={
        item.includes('Bio')
          ? {...styles.searchInput, height: 100, textAlignVertical: 'top'}
          : styles.searchInput
      }
    />
  </View>
);

const General = () => {
  return (
    <View>
      <SectionList
        sections={DATA}
        renderItem={renderItem}
        renderSectionHeader={({section}) => (
          <Text style={{color: '#000000', fontSize: 15, marginLeft: 20}}>
            {section.title}
          </Text>
        )}
        // keyExtractor={item => item.id}
      />
    </View>
  );
};

export default General;

const styles = StyleSheet.create({
  searchInput: {
    width: 325,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(34, 66, 216, 0.5)',
    padding: 15,
    color: '#2242D8',
  },
});
