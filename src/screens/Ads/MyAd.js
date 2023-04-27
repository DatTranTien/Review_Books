import React,{useRef} from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';

import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
  ImageView,
  MediaView,
  PriceView,
  StarRatingView,
  StoreView,
} from 'react-native-admob-native-ads';

const MyAd = (props) => {
  const nativeAdViewRef = useRef();

  React.useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);

  return (
    <View style={[styles.root]}>
      
      <NativeAdView
      ref={nativeAdViewRef}
      style={{
        width: '100%',
        alignSelf: 'center',
        height: 412,
      }}
      adUnitID="ca-app-pub-3060238523720101/5149354866">
      <View
        style={{
          height: 400,
          width: '100%',
          backgroundColor: 'white',
        }}>
        {/* <MediaView
          style={{
            width: 400,
            height: 400 ,
            backgroundColor: 'gray',
          }}
        /> */}
      </View>
    </NativeAdView>
    </View>
  );
};

export default MyAd;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  containerView: {
    width: '100%',
    paddingVertical:10,
    flexDirection:'row',
  },  
  nativeAdView: {
    width: '100%',
 
  },
  iconView: {
    width: 100,
    height: 70,
    borderRadius: 5,
  },
  iconColumn: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoColumn: {
    flex: 0.6,
  },
  headline: {
    fontSize: 20,
    fontFamily: 'SFProDisplay-Bold',
  },
  tagline: {
    marginTop: 5,
  },
  callToAction: {
    width: 100,
    height: 35,
    marginTop: 5,
  },
  callToActionText: {
    fontFamily: 'SFProDisplay-Bold',
  },
});