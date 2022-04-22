

import React from 'react';
import { Alert, Platform, StyleSheet, Text } from 'react-native';
import {
    Scene,
    Router,
    Actions,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import Slide from '../Intro/Slide';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Forget from '../Login/Forget';
import TabBottom from './TabBottom';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scene: {
        backgroundColor: '#F5FCFF',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

const Navigation = ({ init }) => {
    // const {init}=prop
    return (
       
            <Router>
                <Stack  >
                    <Scene key="slide" component={Slide} hideNavBar={true} back={true} />
                    <Scene key="login" component={Login} title="Đăng nhập" back={true} />
                    <Scene key="signup" component={SignUp} title="Đăng ký" back={true} />
                    <Scene key="forget" component={Forget} title="Lấy lại mật khẩu" back={true} />
                    <Scene key="tabBottom" initial={init == "tabBottom" ? true : false} component={TabBottom} hideNavBar={true} drawer={false} />
                    {/* <Scene key="profile" component={Profile} hideNavBar={true} />
                    <Scene key="course" component={Course} hideNavBar={true} />
                    <Scene key="myCourse" component={MyCourse} back={true} renderTitle="" />
                    <Scene key="payment" component={Payment} back={true} renderTitle="Thanh toán" />
                    <Scene key="readCourse" component={ReadCourse} title="Bài đọc" back={true} />
                    <Scene key="blog" component={BlogDetail} renderTitle="" back={true} />
                    <Scene key="myBlog" component={MyBlog} renderTitle="Bài đọc" back={true} />
                    <Scene key="showAll" component={showAll} renderTitle="Tất cả bài viết" back={true} />
                    <Scene key="showAllTopic" component={ShowAllTopic} renderTitle="Tất cả bài viết" back={true} />
                    <Scene key="exeChatbot" component={ChatbotAuto} back={true} title="Luyện tập" />
                    <Scene key="help" component={Help} back={true} title="Trợ giúp" />
                    <Scene key="result" component={Result} hideNavBar={true} />
                    <Scene key="editProfile" component={EditProfile} back={true} />
                    <Scene key="otpPass" component={OTPPass} back={true} title="Nhập OTP"/> */}
                    {/* <Scene key="inputPhone" component={InputPhone} back={true} title="Nhập Số Điện Thoại"/> */}
                    {/* <Scene key="changePass" component={ChangePass} back={true} title="Thay Đổi Mật Khẩu"/> */}
                </Stack>
            </Router>
        
    );

}

export default Navigation;