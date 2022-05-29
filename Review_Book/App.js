import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/screens/Navigation/Navigation';
import { Provider } from 'react-redux';
import configureStore from './src/screens/Redux/Store';
import RNBootSplash from "react-native-bootsplash";
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'
import { Platform, StyleSheet, Text, ScrollView } from 'react-native';
import { notificationListiner, requestUserPermission } from './NoticeService';

function App() {
  const store = configureStore()
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
   if (Platform.OS == "android") {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
   }
  }, [])
  

  useEffect(async() => {
    requestUserPermission()
    notificationListiner()
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      if (Platform.OS == "ios" || Platform.OS == "macos") {
    setTimeout(async() => {
      await RNBootSplash.hide({ fade: true });
    }, 800);
  }
    return subscriber;
    // } // unsubscribe on unmount
  }, []);

if (Platform.OS!=="android") {
  if (initializing ) return null;
}


  if (!user) {
    return (
      <Provider store={store}>
        <Navigation init="slide" />
      </Provider>
    );
  }else{
    return (
      <Provider store={store}>
      <Navigation init="tabBottom"/>
      </Provider>
    );
    }
  
}
export default App
