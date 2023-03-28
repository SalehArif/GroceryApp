import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './screens/Navigation/tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

export default App