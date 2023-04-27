import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class InputPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phone:""
    };
  }

  render() {
    return (
      <View>
          <Text style={{ color: "#858597" }}>Phone</Text>
        <TextInput
                        onChangeText={(text)=>{
                            this.setState({phone:text})
                        }}
                        
                        placeholder="0123456" style={{
                            borderRadius: 10,
                            borderColor: "gray",
                            borderWidth: 1,
                            height: 40,
                            padding: 5,
                            marginTop: 10,
                            color:"#858597"
                        }}
                            placeholderTextColor="gray"
                            keyboardType="phone-pad"
                        />
                        <TouchableOpacity
                        onPress={async()=>{
                            // this.checkValidate()
                            Actions.otpPass({phone:this.state.phone})
                        }}
                        style={{
                            backgroundColor: "#3D5CFF",
                            borderRadius: 10,
                            // width:windowWidth*0.3,
                            paddingVertical: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            marginTop: 20
                        }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16
                            }}>Xác nhận</Text>
                        </TouchableOpacity>
      </View>
    );
  }
}

export default InputPhone;
