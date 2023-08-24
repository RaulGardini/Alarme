import React from 'react';
import Home from './screen/home';
import ConfgAlarme from './screen/confgAlarme';
import ConfgApp from './screen/confgApp';
import Stack_navigator from './navigation/stackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack_navigator/>
    </NavigationContainer>
  );
}


