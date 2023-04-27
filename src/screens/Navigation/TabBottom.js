import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Profile/Profile';
import Search from '../search/Search';
import Community from '../Community/Community';
import TabCommunity from '../Community/TabCommunity';
const Tab = createBottomTabNavigator();

export default class TabBottom extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
             tab:this.props.tab
        }
    }
    
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                initialRouteName={"Trang chủ"}
                    tabBarOptions={{
                        activeTintColor: '#ff5400',
                        inactiveTintColor: '#666',
                        
                        
                    }}
                    screenOptions={{
                        tabBarStyle: { height: "10%" },
                        tabBarLabelStyle:{
                            marginBottom:5,
                            fontSize:15,
                            fontWeight:"700"
                        },
                        headerShown:false
                    }}>
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Image
                                    source={require("../../assets/common/home.png")}
                                    // style={[styles.icon, {  tintColor:color}]}
                                />
                            ),
                        }}
                        name="Trang chủ" component={Home} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Image
                                    source={require("../../assets/common/iconSearch.png")}
                                    // style={[styles.icon, { tintColor: color}]}
                                />
                            ),
                        }}
                        name="Tìm kiếm" component={Search} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Image
                                    source={require("../../assets/common/people.png")}
                                    // style={[styles.icon, { tintColor: color }]}
                                />
                            ),
                        }}
                        name="Cộng đồng" component={Community} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Image
                                    source={require("../../assets/common/i.png")}
                                    // style={[styles.icon, { tintColor: color }]}
                                />
                            ),
                        }}
                        name="Hồ sơ" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        // color:"red"
    }
})
