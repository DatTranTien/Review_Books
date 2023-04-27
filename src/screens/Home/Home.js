import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, ScrollView, TouchableOpacity, Alert, Linking } from 'react-native'
import { Actions } from 'react-native-router-flux';
import auth, { firebase } from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import CardBlog from '../Community/Notifications/CardBlog';
import ActivityIndicator from '../../component/ActivityIndicator';
import dataSample from '../Api/fakeData';
import database from '@react-native-firebase/database';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
    {
        id: 1,
        title: 'First Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
];

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: "",
            userInfoEmail:{},
            LogGG: false,
            obj: {},
            loading: false,
            dataListHome: [],
            dataSearchCourse: []
        }
    }
    componentDidMount() {
        this.getCurrentUserInfo()
        database()
            .ref('/listHome')
            .once("value")
            .then(snapshot => {
                this.setState({dataListHome:snapshot.val()})
            })

    }


    getCurrentUserInfo = async () => {
        try {
            const currentUser = await GoogleSignin.getCurrentUser();
            if (currentUser != null) {
                this.setState({ userInfo: currentUser, LogGG: true });
            }
            else {
                const user = firebase.auth().currentUser;
                user.providerData.forEach((userInfo) => {
                    this.setState({
                        userInfoEmail: userInfo
                    })
                });
            }
        } catch (error) {
        }
    };


    render() {
        return (
            this.state.loading ?
                <ActivityIndicator />
                : <ScrollView style={{
                    backgroundColor: "#FFF",
                    flex: 1
                }}
                    showsVerticalScrollIndicator={false}
                >
                    <ImageBackground
                        source={require('../../assets/Home/imgBackground.jpeg')}
                        style={{ backgroundColor: "#3d5cff", height: windowHeight * 0.2, alignItems: "center", width: windowWidth, justifyContent: "center", paddingTop: windowHeight * 0.1, }}>
                        {/* <ImageBackground> */}



                    </ImageBackground>
                    <View style={{
                        width: "100%", justifyContent: "center", alignItems: "center",
                        backgroundColor: "#dfe7e8",
                        borderBottomRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        paddingTop: 15,
                        paddingBottom: 15,
                    }}>
                        <View style={{
                            width: "90%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }} >
                            <View style={{width:"90%"}}>
                                <Text numberOfLines={1} style={{ color: "#328d99", fontSize: 22, fontWeight: "600" }}>Hi, {this.state.LogGG ? this.state.userInfo.user.email : this.state.userInfoEmail.email}</Text>
                                <Text style={{ color: "#328d99", fontSize: 18, fontWeight: "500", }}>Bắt đầu xem</Text>
                            </View>
                            <View style={{backgroundColor: "#fff",padding:15,borderRadius:15}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Hồ sơ")}>
                                    <Image source={require('../../assets/Home/iconAvatar.png')} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                            </View>

                            {/* </ImageBackground> */}
                        </View>
                    </View>

                    {this.state.dataListHome.map((item,index)=>(
                        <View style={{
                            marginTop: windowHeight * 0.06,
                            alignItems: "center"
                        }}>
    
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "90%"
                            }}>
                                <Text style={{
                                    fontWeight: "500",
                                    fontSize: 18,
                                    color: "#1f1f39"
                                }}>{item.topic}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        Actions.blogReader({uri:item.urlAll,title:item.topic})
                                     }}>
                                    <Text style={{
                                        fontWeight: "500",
                                        fontSize: 18,
                                        color: "#3d5cff",
                                        // textDecorationLine: "underline"
                                    }}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
    
                            <ScrollView>
                                <FlatList
                                    style={{ marginTop: 25 }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={item.readings}
                                    renderItem={({ item }) => (
                                        <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                    )}
                                    keyExtractor={item => item.id.toString()}
                                />
                            </ScrollView>
                        </View>
                    ))
                }

                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})