import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import { Actions } from 'react-native-router-flux';
import database from '@react-native-firebase/database';
import CardBlog from './CardBlog';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class ShowAllTopic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataBlog: []
        }
    }


    componentDidMount() {
        database()
            .ref('/blog')
            .once("value")
            .then(snapshot => {
                this.setState({dataBlog:snapshot.val()})
            })
           
    }

    render() {
        // console.log(this.state.data[0])
        return (
            <ScrollView contentInsetAdjustmentBehavior={"automatic"}
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor: "#FFF",
                paddingTop:24,
                marginBottom:windowHeight*0.15
                // flex: 1,
                // marginBottom:windowHeight*0.2
            }}>
                
                    {this.state.dataBlog.map((item, index) => (
               <View style={{
                paddingBottom: windowHeight * 0.05,
                width: windowWidth,
                justifyContent:"center",
            }}>
                <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "95%"
                    }}>
                        <Text style={{
                                            fontWeight: "500",
                                            fontSize: 20,
                                            color: "#1f1f39"
                                        }}>{item.topicAbout}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.blogReader({uri:item.urlWeb,title:item.topicAbout})
                                // Linking.openURL(item.urlWeb)
                            }
                            }
                        >
                            <Text style={{
                                fontWeight: "500",
                                fontSize: 18,
                                color: "#3d5cff",
                                textDecorationLine: "underline"
                            }}>Xem trên web</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <FlatList
                        style={{
                            width: "100%",
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={item.detail}
                        renderItem={(el , i) => {
                            return (
                                <View key={i}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 15
                                    }}>
                                        <CardBlog title={el.item.title} uri={el.item.uri} time={el.item.time} url={el.item.url} content={el.item.content} />
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                    </View>
                    ))
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
