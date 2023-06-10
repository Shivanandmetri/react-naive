import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ContextProvider from './src/weatherApp/Context';
import Home from './src/weatherApp/Home';
import Start from './src/weatherApp/Start';
import Second from './src/weatherApp/Second';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="start"
            component={Start}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="second"
            component={Second}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
