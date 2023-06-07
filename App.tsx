import React from 'react';
import StackNavigation from './src/components/weatherApp/Navigation';
import ContextProvider from './src/components/weatherApp/Context';

const App = () => {
  return (
    <ContextProvider>
      <StackNavigation />
    </ContextProvider>
  );
};

export default App;
