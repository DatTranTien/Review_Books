import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/screens/Navigation/Navigation';
import { Provider } from 'react-redux';
import configureStore from './src/screens/Redux/Store';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  // GoogleAuthProvider
} from '@react-native-google-signin/google-signin';
import RNBootSplash from "react-native-bootsplash";
// import { getAuth, setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";



function App() {
  const store = configureStore()
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  // useEffect(async() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   setTimeout(async() => {
  //     await RNBootSplash.hide({ fade: true });
  //   }, 1000);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return (
  //     <Provider store={store}>
  //       <Navigation init="slide" />
  //       {/* <Navigation init="tabBottom" /> */}
  //     </Provider>
  //   );
  // }
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);

  return (
    <Provider store={store}>
    <Navigation init="slide"/>
    </Provider>
    // <Help/>
    // <TestMomo/>
    // <MyCourse/>
    // <NoticeIOS/>
    // <Time/>
    // <DetailCourse/>
    // <Chatbot/>
    // <ChatbotAuto/>
    // <PlayVideo/>
  );
}
export default App
