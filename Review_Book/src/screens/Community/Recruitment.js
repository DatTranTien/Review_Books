import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Image, Linking } from 'react-native'
import React, { Component } from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const dataCTV = [
    {
        title: "Á Châu Books",
        url: "https://achaubooks.vn/blogs/news/tuyen-ctv-phan-phoi-sach-toan-quoc",
        img:"https://theme.hstatic.net/200000079237/1000721354/14/logo.png?v=157"
    },
    {
        title: " Nhã Nam Kinh Tế Học",
        url: "https://www.facebook.com/groups/nhanambookclub/posts/734301700482020/",
        img:"https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/37061135_10156473857114085_1722315974851428352_n.jpg?_nc_cat=1&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=ntm0XiQcTT8AX9FyCDC&tn=-L_UcqVVy6oXI0Vw&_nc_ht=scontent.fhan4-1.fna&oh=00_AT-lTtJkVG74V0Gxg4E4M5ds9VeF5yFM1vrhxWyPyGN74w&oe=629E16F9"
    },
    {
        title: "Beta Books",
        url: "https://betabooks.vn/tuyen-dung-ctv-review-sach-online-n95357.html",
        img:"https://mcdn.nhanh.vn/store/24528/logo_1646329248_Unti-1.png"
    },
]
export default class Recruitment extends Component {
    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "90%" }}>
                    {dataCTV.map((item)=>(
                        <View style={{
                            backgroundColor: "#dfe7e8",
                            borderRadius: 10,
                            marginTop: windowWidth * 0.05,
                            padding: 20,
                            // width:windowWidth,
                            // height:windowHeight*0.15,
                        }}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL(item.url)}
                                style={{
    
                                    flexDirection: "row",
                                    width: windowWidth,
                                    height: windowHeight * 0.15,
                                }}>
                                <Image source={{uri:item.img}} style={{ width: "30%", height: windowHeight * 0.15 }} />
                                <View style={{ alignItems: "center", justifyContent: "space-around", width: "55%", marginLeft: 10 }}>
                                    <View style={{ width: "90%", alignItems: "center" }}>
                                        <Text numberOfLines={3} style={{ fontSize: 18, fontWeight: "500" }}>{item.title}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "center", width: "100%" }}>
                                        <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: "500",textDecorationLine:"underline" }}>Xem chi tiết</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})