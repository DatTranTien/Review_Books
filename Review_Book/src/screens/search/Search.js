import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
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
    const [selectCourse, setSelectCourse] = useState(0)
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
                        onChangeText={(text) => { setTextInput(text) }}
                        placeholder="Tìm kiếm ..."
                        placeholderTextColor={"#1f1f39"}
                        style={{ borderColor: "#000", borderWidth: 1,
                         padding: 10, width: textInput ? "80%" : "90%", borderRadius: 10,
                        color:"#1f1f39" }}
                    />
                    {textInput ?
                        <TouchableOpacity 
                        onPress={()=>{setSelectCourse(-1)}}
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
                    }}>Gợi ý</Text>
                </View>

                <View
                    style={{
                        marginTop: windowHeight * 0.02,
                        width: "90%",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}>
                    {category.map((el, i) => (
                        <TouchableOpacity
                            onPress={() => {
                                setSelectCourse(i)
                                setTextInput("")
                                // this.setState({ selectCourse: 1 })
                                // this.setState({ data: fakeSearchCourse.course })
                            }}
                            style={{
                                // width: 75,
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
                            }}>{el}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{
                    marginTop: windowHeight * 0.03,
                    width: "90%",
                }}>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 20,
                        color: "#1f1f39"
                    }}>Kết quả tìm kiếm</Text>
                </View>

                <FlatList
                    style={{ width: "90%", }}
                    data={dataSearch}
                    renderItem={({ item }) => (
                        <View style={{
                            backgroundColor: "#dfe7e8",
                            borderRadius: 10,
                            marginTop: windowWidth * 0.05,
                            padding: 20,
                            // width:windowWidth,
                            // height:windowHeight*0.15,
                        }}>
                            <TouchableOpacity
                                // onPress={()=>Actions.detailCourse({item:item})}
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
                                    <View style={{flexDirection:"row",justifyContent:"center",width:"100%"}}>
                                    <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: "500",color:"#1f1f39" }}>Tác giả: {item.author}</Text>
                                    </View>
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

const styles = StyleSheet.create({})