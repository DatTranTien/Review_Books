import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/screens/Navigation/Navigation';
import { Provider } from 'react-redux';
import configureStore from './src/screens/Redux/Store';
import RNBootSplash from "react-native-bootsplash";
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler'

function App() {
  const store = configureStore()
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(async() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    setTimeout(async() => {
      await RNBootSplash.hide({ fade: true });
    }, 1000);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };

  //   init().finally(async () => {
  //     await RNBootSplash.hide({ fade: true });
  //     console.log("Bootsplash has been hidden successfully");
  //   });
  // }, []);

  if (!user) {
    console.log( "vao 1---->")
    return (
      <Provider store={store}>
        <Navigation init="slide" />
        {/* <Navigation init="tabBottom" /> */}
      </Provider>
    );
  }
  // else{
  //   console.log( "vao 2---->")
    return (
      <Provider store={store}>
      <Navigation init="tabBottom"/>
      </Provider>
    );

  
}
export default App
