import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image, TouchableOpacity, ScrollView,Linking } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class CardBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {title,uri,url} = this.props
        return (
            <TouchableOpacity 
            onPress={()=>{Actions.push("blogReader",{uri:url})}}
            style={{justifyContent:"center",alignItems:"center",width:windowWidth*0.5,height:windowHeight*0.3,marginLeft:15,backgroundColor:"#eeeff2",borderRadius:10,paddingBottom:15,paddingTop:15}}>
                <Image 
                source={{
                    uri: uri,
                  }}
                  style={
                      {
                          width:"80%",
                          height:"80%"
                      }
                  }
                />
                <View style={{marginTop:15}}> 
                    <Text numberOfLines={2} style={{fontSize:18,fontWeight:"500"}}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({})
