import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './myTabs';
import WelcomePage from './WelcomePage';
import Scan from './Camera';
import SignUp from './SignUp';
import Login from './Login';
import Scanned from './Scanned';
import EditCard from './EditCard';
import Bottom from './BottomSheet';

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabNaigation"
          options={{header: () => null}}
          component={MyTabs}
        />
        <Stack.Screen
          name="WelcomePage"
          // options={{title: null}}
          component={WelcomePage}
        />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen
          name="edit"
          component={EditCard}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="scanned"
          component={Scanned}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigation;
