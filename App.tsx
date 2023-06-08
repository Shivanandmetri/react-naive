import React from 'react';
import StackNavigation from './src/weatherApp/Navigation';
import ContextProvider from './src/weatherApp/Context';

const App = () => {
  return (
    <ContextProvider>
      <StackNavigation />
    </ContextProvider>
  );
};

export default App;
