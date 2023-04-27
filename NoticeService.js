import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
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
export const notificationListiner = async() =>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        navigation.navigate(remoteMessage.data.type);
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