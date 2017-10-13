/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    DatePickerAndroid
} from 'react-native';
import Util from './common/util';
import Service from './common/Service';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email:"",
            birthday:"",
            isLoadingShow: false,
        }
    }
    render() {
        const {goBack} = this.props.navigation;
        return (
            <ImageBackground source={require('../images/Background2.png')} style={styles.backgroundImage}>
                <View style={styles.goBack}>
                    <TouchableOpacity onPress={() => {
                        goBack()
                    }}>
                        <Image source={require('../images/icon-Back.png')} style={styles.iconBack}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={[styles.container]}>
                        <View style={styles.title}>
                            <Text style={styles.title_text}>
                                New Account
                            </Text>
                        </View>
                        <View style={styles.avatar}>
                            <View style={styles.mask}>
                                <TouchableOpacity>
                                    <Image source={require('../images/icon-Camera.png')} style={styles.camera} resizeMode="stretch"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.row, {marginTop: 20}]}>
                            <Image source={require('../images/icon-Username.png')} style={styles.icon}
                                   resizeMode="stretch"/>
                            <TextInput style={styles.input}
                                       placeholder="Name"
                                       placeholderTextColor="#ffffff"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(val) => {
                                           this.setState({
                                               username: val
                                           })
                                       }}
                            >
                            </TextInput>
                        </View>
                        <View style={[styles.row]}>
                            <Image source={require('../images/icon-Email.png')} style={styles.icon}
                                   resizeMode="stretch"/>
                            <TextInput style={styles.input}
                                       placeholder="Email"
                                       placeholderTextColor="#ffffff"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(val) => {
                                           this.setState({
                                               email: val
                                           })
                                       }}
                            >
                            </TextInput>
                        </View>
                        <View style={[styles.row]}>
                            <Image source={require('../images/icon-Password.png')} style={styles.icon}
                                   resizeMode="stretch"/>
                            <TextInput style={styles.input}
                                       placeholder="Password"
                                       placeholderTextColor="#ffffff"
                                       underlineColorAndroid="transparent"
                                       onChangeText={(val) => {
                                           this.setState({
                                               password: val
                                           })
                                       }}
                            >
                            </TextInput>
                        </View>
                        <View style={[styles.row]}>
                            <Image source={require('../images/icon-Birthday.png')} style={styles.icon}
                                   resizeMode="stretch"/>
                            <View style={{justifyContent:'center',flex:1, marginLeft: 23,
                                paddingLeft:3,
                                height: 46,
                                borderBottomWidth: 1,
                                borderBottomColor: '#565764',}}>
                                <TouchableOpacity onPress={
                                    this._selectDate.bind(this)
                                }>
                                    <Text style={[{color:'#ffffff',fontSize:14}]}>{this.state.birthday||"Birthday"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this.register.bind(this)}>
                            <View style={[styles.flex, styles.center]}>
                                <View style={styles.btn}>
                                    <Text style={styles.btn_text}>Create</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.isLoadingShow ?
                            Util.loading
                            :null
                    }
                </ScrollView>
            </ImageBackground>
        )
    }
    _selectDate(){
        let that=this;
        try {
            DatePickerAndroid.open({
                // 要设置默认值为今天的话，使用`new Date()`即可。
                // 下面显示的会是2020年5月25日。月份是从0开始算的。
                date: new Date()
            }).then(function ({action, year, month, day}) {
                if (action === DatePickerAndroid.dateSetAction) {
                    // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                    that.setState({
                        birthday:year+"-"+month+"-"+day
                    })
                }
            });
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }
    register(){
        const {goBack} = this.props.navigation;
        let loginURL=Service.host+Service.addUser;
        let username = this.state.username;
        let password = this.state.password;
        let email=this.state.email;
        let birthday=this.state.birthday;
        const that=this;
        if (!username || !password||!email||!birthday) {
            Alert.alert('提示', '用户名或密码不能为空');
            return false;
        }
        birthday=birthday.split("-");
        that.setState({
            isLoadingShow:true
        });
        Util.post(loginURL,{
            username:username,
            password:password,
            email:email,
            birthday:new Date(birthday[0],birthday[1]-1,birthday[2])
        },function (data) {
            that.setState({
                isLoadingShow:false
            });
            if(data.status===200){
                Alert.alert('提示','注册成功',[
                        {text: 'OK', onPress: () => goBack()},
                    ],);
            }else{
                Alert.alert('提示', data.msg);
            }
        })
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //resizeMode:Image.resizeMode.contain,
        //祛除内部元素的白色背景
        backgroundColor: 'rgba(0,0,0,0)',
    },
    goBack: {
        paddingTop:30,
        paddingLeft:15
    },
    iconBack:{
        width: 22,
        height: 22,
    },
    container: {
        flex: 1,
        paddingLeft:28,
        paddingTop:20
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex: {
        flex: 1,
    },
    title_text:{
        fontSize:30,
        color:'#ffffff'
    },
    row: {
        flexDirection: 'row',
        height: 46,
        marginBottom: 13,
        alignItems: 'center',
        position: 'relative'
    },
    icon: {
        width: 22,
        height: 22
    },
    input: {
        color: '#ffffff',
        fontSize: 14,
        flex: 1,
        marginLeft: 23,
        height: 46,
        borderBottomWidth: 1,
        borderBottomColor: '#565764',
    },
    btn: {
        marginTop: 26,
        width: 325,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3366',
        borderRadius: 28
    },
    btn_text: {
        fontSize: 16,
        color: '#ffffff'
    },
    avatar:{
        alignItems:'center',
        marginTop:45,
    },
    mask:{
        width:120,
        height:120,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.1)',
        borderRadius:60
    },
    camera:{
        width:34,
        height:34
    }
});