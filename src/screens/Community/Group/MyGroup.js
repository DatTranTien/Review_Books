import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class MyGroup extends Component {
    render() {
        return (
            <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={{
                backgroundColor: "#FFF",
                // flex: 1,
                // paddingBottom:windowHeight*0.5
            }}>

                <View style={{
                    width: windowWidth,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                    paddingBottom:windowHeight*0.3
                }}>
                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                         onPress={() => {
                            Linking.openURL("https://www.reader.com.vn/")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/web.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >WebSite</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia cộng đồng để cùng trao đổi kiến thức, gặp gỡ giao lưu, và nhận những bài học miễn phí,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/imgWebPage.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>


                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.facebook.com/khonggiansachcuhanoi/")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/GroupFace.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >Hội chợ sách cũ Hà Nội</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
Không gian sách cũ Hà Nội thỏa mãn đam mê sách cũ của những độc giả muốn tìm lại một chút hoài niệm, hoặc kiếm tìm những đầu sách cũ/ có giá trị.
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/hoichosachcu.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.facebook.com/bila.docdetruongthanh")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/GroupFace.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >Billa - Đọc để trưởng thành</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
BILA – Đọc để trưởng thành ra đời với sứ mệnh cùng bạn đọc sách, khám phá thế giới thú vị qua trang sách và áp dụng những điều hay đã đọc vào cuộc sống.                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/bila.jpeg')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>


                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.youtube.com/channel/UCqewf8j6mYE5TsVMlnlFGXw/featured")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/youtube.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >Youtube</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia cộng đồng để cùng trao đổi kiến thức, gặp gỡ giao lưu, và nhận những bài học miễn phí,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/youtubeSach.jpeg')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>
                    {/* <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.tiktok.com/@elearncunghoc")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/tiktok.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >TikTok</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia cộng đồng để cùng trao đổi kiến thức, gặp gỡ giao lưu, và nhận những bài học miễn phí,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/imgTiktokPage.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View> */}

                    
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
