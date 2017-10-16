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
import Picker from 'react-native-picker';
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
                                       onFocus={()=>{
                                           Picker.hide();
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
                                       onFocus={()=>{
                                           Picker.hide();
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
                                       onFocus={()=>{
                                           Picker.hide();
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
                                    () => this._showDatePicker()
                                }>
                                    <Text style={[{color:'#ffffff',fontSize:14}]}>{this.state.birthday ? (this.state.birthday[0] + this.state.birthday[1] + this.state.birthday[2]) : "Birthday"}</Text>
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
    _createDateData() {
        let date = [];
        for (let i = 1950; i < 2050; i++) {
            let month = [];
            for (let j = 1; j < 13; j++) {
                let day = [];
                if (j === 2) {
                    for (let k = 1; k < 29; k++) {
                        day.push(k + '日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if (i % 4 === 0) {
                        day.push(29 + '日');
                    }
                }
                else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {
                    for (let k = 1; k < 32; k++) {
                        day.push(k + '日');
                    }
                }
                else {
                    for (let k = 1; k < 31; k++) {
                        day.push(k + '日');
                    }
                }
                let _month = {};
                _month[j + '月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i + '年'] = month;
            date.push(_date);
        }
        return date;
    }

    _showDatePicker() {
        let that = this;
        let Date = this.state.date;
        Picker.init({
            pickerData: this._createDateData(),
            pickerToolBarFontSize: 16,
            selectedValue: Date,
            pickerTitleText: 'date picker',
            pickerFontSize: 16,
            pickerFontColor: [255, 0, 0, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                that.setState({
                    birthday: pickedValue
                });
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }
    register(){
        const {goBack} = this.props.navigation;
        let [year,month,day] = this.state.birthday;
        let loginURL=Service.host+Service.addUser;
        let username = this.state.username;
        let password = this.state.password;
        let email=this.state.email;
        const that=this;
        if (!username || !password||!email||!year) {
            Alert.alert('提示', '用户名或密码不能为空');
            return false;
        }
        that.setState({
            isLoadingShow:true
        });
        Util.post(loginURL,{
            username:username,
            password:password,
            email:email,
            birthday:new Date(year.slice(0,-1),month.slice(0,-1)-1,day.slice(0,-1))
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