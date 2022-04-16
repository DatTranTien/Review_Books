import React, { useState, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import Navigation from './src/screens/Navigation/Navigation';
// import auth, { firebase } from '@react-native-firebase/auth';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Platform } from 'react-native';
import configureStore from './src/screens/Redux/Store';

 export default function App() {
  const store = configureStore()
  return (
    <Provider store={store}>
    {/* <Navigation init="slide"/> */}
    <Navigation init="slide"/>
   </Provider>
  );
}

registerRootComponent( App);

// if (Platform.OS === 'web') {
//     const rootTag = document.getElementById('root') || document.getElementById('X');
//     AppRegistry.runApplication('X', { rootTag });
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
