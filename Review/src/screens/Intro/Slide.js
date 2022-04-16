import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import Intro1 from './Intro1';
import { Actions } from 'react-native-router-flux';
// import database from '@react-native-firebase/database';
// import firestore from '@react-native-firebase/firestore';


// import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyADZjgrx11K1XSqGtALqDyUWPR5k_jMgSM",
  authDomain: "course-c25e7.firebaseapp.com",
  databaseURL: "https://course-c25e7-default-rtdb.firebaseio.com",
  projectId: "course-c25e7",
  storageBucket: "course-c25e7.appspot.com",
  messagingSenderId: "507828569515",
  appId: "1:507828569515:web:1bd7249b4077f649b57eee",
  measurementId: "G-NZJ4E5W3TX"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const slides = [
  {
    key: 1,
    page: <Intro1 />
  },
  {
    key: 2,
    page: <Intro2 />
  },
  {
    key: 3,
    page: <Intro3 />
  }
];


export default class Slide extends React.Component {
  constructor(props) {
    super(props)
    // firebase.initializeApp(firebaseConfig);

    this.state = {
      showRealApp: false
    }
  }

  componentDidMount() {

 async function User() {
  const user = await firestore().collection('dataCourse').doc('VhdK3awwW2wTBlcsU2Or').get();
  // console.log("usser 123============>","------->",user)
  database()
  .ref('/account')
  .once("value")
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
  // useEffect(() => {
    // const subscriber = firestore()
    //   .collection('dataCourse')
    //   .doc("VhdK3awwW2wTBlcsU2Or")
    //   .onSnapshot(documentSnapshot => {
    //     console.log('User data: ==============>', documentSnapshot.data());
    //   });

    // Stop listening for updates when no longer required
    // return () => subscriber();
  // }, [userId]);
}

    // User()
    // console.log("user vaof user====>")
    
    // reference.on('value', snapshot => {
    //   console.log('User data: ', snapshot.val());
    // });

    // let ref = firebase.database().ref("/blog");
    // ref.on("value", snapshot => {
    //   const state = snapshot.val();
    //   this.setState(state);
    // });
  //   const reference = firebase
  // .app()
  // .database('https://course-c25e7-default-rtdb.firebaseio.com/')
  // .ref('/course-c25e7-default-rtdb/account');

  // firebase.database().ref(`course-c25e7-default-rtdb/`).on('account', snapshot => {
  //   let responselist = Object.values(snapshot.val())
  //   console.log(responselist)
  //   console.log(snapshot.val())
    // setLoading(true);
};
    // var leadsRef = a.ref('account');
    
  // }

  _renderItem = ({ item }) => {
    return (
      item.page
      // <View style={styles.slide}>
      //   <Text style={styles.title}>{item.title}</Text>
      //   <Image source={item.image} />
      //   <Text style={styles.text}>{item.text}</Text>
      // </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  _renderDoneButton = () => {
    return (
      // <View style={styles.buttonCircle}>
      <TouchableOpacity style={{
        backgroundColor: "#3d5cff",
        borderRadius: 20,
        padding: 10,
        // opacity:0.5
      }}
        onPress={() => Actions.push("login")}
      >
        <Text style={{
          color: "#FFF",
          fontSize: 18
        }}>Xong</Text>
      </TouchableOpacity>
      // </View>
    );
  };
  render() {
    // if (this.state.showRealApp) {
    //   return <App />;
    // } else {
      return <AppIntroSlider
        renderDoneButton={this._renderDoneButton}
        activeDotStyle={{ backgroundColor: "#3d5cff" }}
        renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
    // }
  }
}
const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});