import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Exercise from './Exercise';
import Lesson from './Lesson';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import AboutCourse from './AboutCourse';
const Tab = createMaterialTopTabNavigator();



export default function TabSession({item,value}) {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            // tabBar={() => <View /> }
            initialRouteName="Bài Học"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarLabelStyle: { fontSize: 14 },
              }}>
                  <Tab.Screen name="Bài Học"
                  children={() => <Lesson item={item} value={value}/>}/>
                  <Tab.Screen name="Bài Tập"
                  children={() => <Exercise item={item} value={value} />}/>
                  <Tab.Screen name="Thông tin"
                  children={() => <AboutCourse item={item} value={value}/>}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}