// import { firebase } from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ImageBackground, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import CardBlog from '../Community/Notifications/CardBlog';
import ActivityIndicator from '../../component/ActivityIndicator';

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
            obj: {},
            loading: false,
            dataBlog: [],
            dataSearchCourse: [],
            dataBlogDetal: [
                {
                    title: "Sống như ngày mai sẽ chết",
                    uri: "https://www.reader.com.vn/uploads/images/review-sach-song-nhu-ngay-mai-se-chet.jpeg",
                    url: "https://www.reader.com.vn/review-sach-song-nhu-ngay-mai-se-chet-a650.html",
                    id: 0
                },
                {
                    title: "Để tâm không bận",
                    uri: "https://www.reader.com.vn/uploads/images/sach-de-tam-khong-ban-1.jpeg",
                    url: "https://www.reader.com.vn/review-sach-de-tam-khong-ban-ryunosuke-koike-a647.html",
                    id: 1
                }
            ]
        }
    }

    // showAll=()=>{

    // }
    // componentDidMount() {
    //     database()
    //         .ref('/blog')
    //         .once("value")
    //         .then(snapshot => {
    //             console.log('User data blog------>: ', snapshot.val());
    //             this.setState({dataBlog:snapshot.val().topic})
    //             this.setState({dataBlogDetal:this.state.dataBlog[0].detail})
    //             console.log(this.state.dataBlog[0].detail,"de tail nef---->")
    //         })
    //         .then(()=>{
    //             database()
    //         .ref('/searchCourse')
    //         .once("value")
    //         .then(snapshot => {
    //             console.log('User data searchCourse------>: ', snapshot.val());
    //             this.setState({dataSearchCourse:snapshot.val().course})
    //         });
    //         });

    // }


    getCurrentUserInfo = async () => {
        try {
            //   const userInfo = await GoogleSignin.signInSilently();
            //   this.setState({ userInfo:userInfo });

            const currentUser = await GoogleSignin.getCurrentUser();
            // this.setState({ currentUser });
            this.setState({ userInfo: currentUser });
            console.log("userInfo======>", this.state.userInfo.user.email)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // user has not signed in yet
                Alert.alert("erro1")
            } else {
                Alert.alert("erro2")
            }
        }
    };

    // getCurrentUserInfo = async () => {
    //     const currentUser = await GoogleSignin.getCurrentUser();
    //     this.setState({ currentUser });
    //   };


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
                            <View>
                                <Text style={{ color: "#328d99", fontSize: 24, fontWeight: "600" }}>Hi, My friend!</Text>
                                <Text style={{ color: "#328d99", fontSize: 20, fontWeight: "500", }}>Bắt đầu xem</Text>
                            </View>
                            <View style={{backgroundColor: "#fff",padding:15,borderRadius:15}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Hồ sơ")}>
                                    <Image source={require('../../assets/Home/iconAvatar.png')} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                            </View>

                            {/* </ImageBackground> */}
                        </View>
                    </View>


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
                            }}>BÁN CHẠY NHẤT</Text>
                            <TouchableOpacity
                                onPress={() => { }}>
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
                                data={this.state.dataBlogDetal}
                                renderItem={({ item }) => (
                                    <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </ScrollView>
                    </View>


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
                            }}>VĂN HỌC - TIỂU THUYẾT</Text>
                            <TouchableOpacity
                                onPress={() => { }}>
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
                                data={this.state.dataBlogDetal}
                                renderItem={({ item }) => (
                                    <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </ScrollView>
                    </View>


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
                            }}>KINH DOANH - ĐẦU TƯ</Text>
                            <TouchableOpacity
                                onPress={() => { }}>
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
                                data={this.state.dataBlogDetal}
                                renderItem={({ item }) => (
                                    <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </ScrollView>
                    </View>


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
                            }}>PHÁT TRIỂN BẢN THÂN</Text>
                            <TouchableOpacity
                                onPress={() => { }}>
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
                                data={this.state.dataBlogDetal}
                                renderItem={({ item }) => (
                                    <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </ScrollView>
                    </View>


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
                            }}>MARKETING - BÁN HÀNG</Text>
                            <TouchableOpacity
                                onPress={() => { }}>
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
                                data={this.state.dataBlogDetal}
                                renderItem={({ item }) => (
                                    <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </ScrollView>
                    </View>


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
                            }}>KHỞI NGHIỆP</Text>
                            <TouchableOpacity
                                onPress={() => { }}>
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
                                data={this.state.dataBlogDetal}
                                renderItem={({ item }) => (
                                    <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </ScrollView>
                    </View>


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
                            }}>QUÀ TẶNG CUỘC SỐNG</Text>
                            <TouchableOpacity
                                onPress={() => { }}>
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
                                data={this.state.dataBlogDetal}
                                renderItem={({ item }) => (
                                    <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </ScrollView>
                    </View>


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
                            }}>GÓC SUY NGẪM</Text>
                            <TouchableOpacity
                                onPress={() => { }}>
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
                                data={this.state.dataBlogDetal}
                                renderItem={({ item }) => (
                                    <CardBlog title={item.title} uri={item.uri} url={item.url} />
                                )}
                                keyExtractor={item => item.id.toString()}
                            />
                        </ScrollView>
                    </View>



                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
