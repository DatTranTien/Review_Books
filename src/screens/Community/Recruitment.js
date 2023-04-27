import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Image, Linking, ScrollView } from 'react-native'
import React, { Component } from 'react'
import dataSample from '../Api/fakeData';
import database from '@react-native-firebase/database';
import { Actions } from 'react-native-router-flux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Recruitment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataRecuit: []
        }
    }
    componentDidMount() {
        database()
            .ref('/recuit')
            .once("value")
            .then(snapshot => {
                this.setState({dataRecuit:snapshot.val()})
            })
    }
    render() {
        return (
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                marginBottom:windowHeight*0.15
            }}
            >
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "90%" }}>
                    {this.state.dataRecuit.map((item)=>(
                        <View style={{
                            backgroundColor: "#dfe7e8",
                            borderRadius: 10,
                            marginTop: windowWidth * 0.05,
                            padding: 20,
                        }}>
                            <TouchableOpacity
                                onPress={() => Actions.blogReader({uri:item.url,title:item.title})}
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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})