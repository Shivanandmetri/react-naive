/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from './Setting';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './profile';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import ScanCard from './ScanCard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';

const Tab = createBottomTabNavigator();

// const Cards = () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 30, fontWeight: 'bold', color: '#2242D8'}}>
//         Cards
//       </Text>
//     </View>
//   );
// };

const Contact = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#2242D8', fontWeight: 'bold', fontSize: 30}}>
          Contacts
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: 126,
            height: 40,
            borderRadius: 20,
            borderColor: 'rgba(34, 66, 216, 0.5)',
            backgroundColor: '#EAEDFB',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            paddingHorizontal: 10,
          }}>
          <Text style={{color: '#2242D8', fontSize: 15}}>+ Create group</Text>
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

      <View style={styles.contact}>
        <View>
          <Image source={require('./images/Ellipse8.png')} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              top: -15,
            }}>
            <Image
              style={{left: 0}}
              source={require('./images/Ellipse9.png')}
            />
            <Image
              style={{position: 'absolute', left: 20}}
              source={require('./images/Ellipse10.png')}
            />
            <Image
              style={{left: 5}}
              source={require('./images/Ellipse11.png')}
            />
          </View>
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2242D8'}}>
            All contacts
          </Text>
          <Text style={{color: '#8B9CEB'}}>35 contacts</Text>
        </View>
        <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
      </View>
      <View style={styles.contact}>
        <View>
          <Image source={require('./images/Ellipse12.png')} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              left: 7,
              top: -15,
            }}>
            <Image
              style={{position: 'absolute', left: 10}}
              source={require('./images/Ellipse14.png')}
            />
            <Image
              style={{right: 10}}
              source={require('./images/Ellipse13.png')}
            />
            <Image
              style={{left: -1}}
              source={require('./images/Ellipse15.png')}
            />
          </View>
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2242D8'}}>
            Recently added
          </Text>
          <Text style={{color: '#8B9CEB'}}>30 contacts</Text>
        </View>
        <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
      </View>
      <View style={styles.contact}>
        <View>
          <Image source={require('./images/Ellipse16.png')} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              left: 7,
              top: -15,
            }}>
            <Image
              style={{position: 'absolute', left: 10}}
              source={require('./images/Ellipse18.png')}
            />
            <Image
              style={{right: 10}}
              source={require('./images/Ellipse17.png')}
            />
            <Image
              style={{left: -1}}
              source={require('./images/Ellipse19.png')}
            />
          </View>
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2242D8'}}>
            Live contacts
          </Text>
          <Text style={{color: '#8B9CEB'}}>40 contacts</Text>
        </View>
        <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
      </View>
      <View style={styles.contact}>
        <View>
          <Image source={require('./images/Ellipse8.png')} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              left: 7,
              top: -15,
            }}>
            <Image
              style={{position: 'absolute', left: 10}}
              source={require('./images/Ellipse9.png')}
            />
            <Image
              style={{right: 10}}
              source={require('./images/Ellipse10.png')}
            />
            <Image
              style={{left: -1}}
              source={require('./images/Ellipse11.png')}
            />
          </View>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('scanned')}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#2242D8'}}>
              Scanned
            </Text>
            <Text style={{color: '#8B9CEB'}}>0 contacts</Text>
          </Pressable>
        </View>
        <FontAwesome5 name="angle-right" size={30} color="#2242D8" />
      </View>
    </View>
  );
};

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let icon;
          if (route.name === 'Cards') {
            icon = focused ? 'card' : 'card-outline';
          }
          if (route.name === 'Scan Card') {
            icon = focused ? 'scan' : 'scan-outline';
          }
          if (route.name === 'Add card') {
            icon = focused ? 'add-circle' : 'add-circle-outline';
          }
          if (route.name === 'Contact') {
            icon = focused ? 'person-circle' : 'person-circle-outline';
          }
          if (route.name === 'Settings') {
            icon = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={icon} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        options={{header: () => null}}
        name="Cards"
        component={Home}
      />
      <Tab.Screen name="Scan Card" component={ScanCard} />
      <Tab.Screen name="Add card" component={Profile} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen
        options={{header: () => null}}
        name="Settings"
        component={Setting}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginBottom: 25,
    marginHorizontal: 10,
    marginTop: 15,
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
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 110,
    width: 325,
    top: 10,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(234, 237, 251, 0.31)',
    borderColor: 'rgba(34, 66, 216, 0.26)',
  },
});
