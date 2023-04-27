import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import dataSample from '../Api/fakeData';
import { Actions } from 'react-native-router-flux';
import database from '@react-native-firebase/database';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const category = [
    "Kinh doanh",
    "Đầu tư",
    "Văn học",
    "Bán hàng",
    "kỹ năng mềm",
    "Sức khoẻ"
]

const dataSearch = [
    {
        title: "Sống như ngày mai sẽ chết",
        uri: "https://www.reader.com.vn/uploads/images/review-sach-song-nhu-ngay-mai-se-chet.jpeg",
        url: "https://www.reader.com.vn/review-sach-song-nhu-ngay-mai-se-chet-a650.html",
        id: 0,
        author: "dat"
    },
    {
        title: "Để tâm không bận",
        uri: "https://www.reader.com.vn/uploads/images/sach-de-tam-khong-ban-1.jpeg",
        url: "https://www.reader.com.vn/review-sach-de-tam-khong-ban-ryunosuke-koike-a647.html",
        id: 1,
        author: "dat"
    },
    {
        title: "Sống như ngày mai sẽ chết https://www.reader.com.vn/uploads/images/review-sach-song-nhu-ngay-mai-se-chet.jpeg",
        uri: "https://www.reader.com.vn/uploads/images/review-sach-song-nhu-ngay-mai-se-chet.jpeg",
        url: "https://www.reader.com.vn/review-sach-song-nhu-ngay-mai-se-chet-a650.html",
        id: 2,
        author: "dat"
    },
    {
        title: "Để tâm không bận",
        uri: "https://www.reader.com.vn/uploads/images/sach-de-tam-khong-ban-1.jpeg",
        url: "https://www.reader.com.vn/review-sach-de-tam-khong-ban-ryunosuke-koike-a647.html",
        id: 3,
        author: "datdfgsdfgsdfgdfsgsdfgdfgdsfgdfgdfs"
    },
]

export default function Search() {
    const [textInput, setTextInput] = useState("")
    const [selectCourse, setSelectCourse] = useState(-1)
    const [arrResult, setArrResult] = useState([])
    const [callSearch, setCallSearch] = useState(false)
    const [textCate, setTextCate] = useState(false)
    const [dataListHome, setDataListHome] = useState([])
    const arrData=[]
    const filterBook=()=>{
        setCallSearch(true)
        setArrResult([])
        if (textInput) {
            const result = dataListHome.map((item,index)=>{
                let getDataEl=item.readings.filter(el => el.title.toLocaleLowerCase().includes(textInput.toLocaleLowerCase()))
                
               if (getDataEl) {
                getDataEl.forEach(element => {
                    setArrResult(state =>[...state,element])
                });
               }
            });
        }
    }
    useEffect(() => {
        setArrResult([])
        setTextInput(""),
        setCallSearch(false)
        database()
            .ref('/listHome')
            .once("value")
            .then(snapshot => {
                setDataListHome(snapshot.val())
            })
    }, [])
    
    const callSearchElement=(i)=>{
        setCallSearch(true)
        setArrResult([])
            const result = dataListHome[i].readings.filter((item,index)=>item.title.toLocaleLowerCase().includes(textInput.toLocaleLowerCase()))
            
            console.log("result",result)
               if (result) {
                result.forEach(element => {
                    setArrResult(state =>[...state,element])
                });
               }
            
        }
    
    callCategory = (i)=>{
        setArrResult([])
        setTextCate(true)
        dataListHome[i].readings.map((element,index)=>{
                setArrResult(state =>[...state,element])
            })
            setSelectCourse(i)
    }
    return (

        <SafeAreaView >
            <ScrollView contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "90%", margin: 15 }}>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 18,
                        color: "#1f1f39"
                    }}>Khám phá</Text>
                </View>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <TextInput
                    value={textInput}
                    autoCapitalize="none"
                        onChangeText={(text) => { setTextInput(text) }}
                        placeholder="Tìm kiếm ..."
                        placeholderTextColor={"#1f1f39"}
                        style={{ borderColor: "#000", borderWidth: 1,
                         padding: 10, width: textInput ? "80%" : "90%", borderRadius: 10,
                        color:"#1f1f39" }}
                    />
                    {textInput ?
                        <TouchableOpacity 
                        onPress={()=>{
                            if (textInput && selectCourse!==-1) {
                                console.log("selectCourse",selectCourse)
                                 callSearchElement(selectCourse)
                            }else{
                                filterBook()
                            }
                        }}
                        >
                            <Image
                                source={require("../../assets/search/search.png")} />
                        </TouchableOpacity>
                        : null}
                </View>

                <View style={{
                    marginTop: windowHeight * 0.03,
                    width: "90%",
                }}>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 20,
                        color: "#1f1f39"
                    }}>Danh mục</Text>
                </View>

                <TouchableOpacity
                            onPress={() => {
                                setSelectCourse(-1)
                                if (!textInput) {
                                    setArrResult([])
                                    setCallSearch(false)
                                }else{
                                    filterBook()
                                }
                                // setTextInput("")
                                // this.setState({ selectCourse: 1 })
                                // this.setState({ data: fakeSearchCourse.course })
                            }}
                            style={{
                                width: "30%",
                                // height: 30,
                                borderRadius: 37,
                                backgroundColor: selectCourse == -1 ? "#3d5cff":"#999",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: 5,
                                padding: 10
                            }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16,
                                fontWeight: "400",
                                // color:"#1f1f39"
                                textTransform:"capitalize"
                            }}>Bỏ chọn</Text>
                        </TouchableOpacity>

                <View
                    style={{
                        marginTop: windowHeight * 0.02,
                        width: "90%",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}>
                    {dataListHome.map((el, i) => (
                        <TouchableOpacity
                            onPress={() => {
                                setSelectCourse(i)
                                if (textInput) {
                                    callSearchElement(i)
                                }
                                if (!textInput) {
                                    callCategory(i)
                                }
                                // setTextInput("")
                                // this.setState({ selectCourse: 1 })
                                // this.setState({ data: fakeSearchCourse.course })
                            }}
                            style={{
                                width: "30%",
                                // height: 30,
                                borderRadius: 37,
                                backgroundColor: selectCourse == i ? "#3d5cff" : "#999",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: 5,
                                padding: 10
                            }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16,
                                fontWeight: "400",
                                // color:"#1f1f39"
                                textTransform:"capitalize"
                            }}>{el.topic}</Text>
                        </TouchableOpacity>
                    ))}
                    
                </View>

                <View style={{
                    marginTop: windowHeight * 0.03,
                    width: "90%",
                }}>
                    {callSearch && textInput ?(
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 20,
                            color: "#1f1f39"
                        }}>Kết quả tìm kiếm cho "{textInput}"</Text>
                    ):null}
                    
                </View>

                <FlatList
                    style={{ width: "90%",marginBottom:30 }}
                    data={arrResult}
                    renderItem={({item},index ) => (
                        <View
                        key={index}
                        style={{
                            backgroundColor: "#dfe7e8",
                            borderRadius: 10,
                            marginTop: windowWidth * 0.05,
                            padding: 20,
                            // width:windowWidth,
                            // height:windowHeight*0.15,
                        }}>
                            <TouchableOpacity
                                onPress={()=>Actions.blogReader({uri:item.url,title:item.topic})}
                                style={{

                                    flexDirection: "row",
                                    width: windowWidth,
                                    height: windowHeight * 0.15,
                                }}>
                                <Image source={{ uri: item.uri }} style={{ width: "30%", height: windowHeight * 0.15 }} />
                                <View style={{ alignItems: "center", justifyContent: "space-around", width: "55%", marginLeft: 10 }}>
                                    <View style={{width:"90%",alignItems:"center"}}>
                                        <Text numberOfLines={3} style={{ fontSize: 18, fontWeight: "500",color:"#1f1f39" }}>{item.title}</Text>
                                    </View>
                                    {/* <View style={{flexDirection:"row",justifyContent:"center",width:"100%"}}>
                                    <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: "500",color:"#1f1f39" }}>Tác giả: {item.author}</Text>
                                    </View> */}
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
        </SafeAreaView>

    )
}

