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
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { Actions } from 'react-native-router-flux';
function App() {
  const store = configureStore()
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);
   const [initialRoute, setInitialRoute] = useState('Home');
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

  useEffect(()=>{
    requestUserPermission()
    notificationListiner()
  },[])



  const  requestUserPermission=async() =>{
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      getFcmToken()
  }
  }
  
  const getFcmToken = async () =>{
      let fcmTOken = await AsyncStorage.getItem("fcmToken")
     console.log("fcmToken--------->old ",fcmTOken)
      if (!fcmTOken) {
          try {
              const fcmToken=await messaging().getToken();
                  if (fcmToken) {
                       console.log("fcmToken---------------------->",fcmToken)
                      await AsyncStorage.setItem("fcmToken",fcmToken)
                  }
          } catch (error) {
              
          }
      }
  }
   const notificationListiner = async() =>{
      messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
          Actions.push(remoteMessage.data.type);
        });
        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
            setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
          }
          setLoading(false);
        });
  }
  
  

  useEffect(async() => {
    
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

if (loading) {
  return null;
}else{
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
    // return (
    //   <Provider store={store}>
    //     <Navigation init={initialRoute} />
    //   </Provider>
    // );
  }
}
export default App
