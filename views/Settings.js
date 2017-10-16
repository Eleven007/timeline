/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/30
 * 历史修订：
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    AsyncStorage,
    TextInput,
    DatePickerAndroid
} from 'react-native';
import Util from './common/util';
import Picker from 'react-native-picker';
import area from './common/area.json';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectday: {
                borderBottomWidth: Util.pixel,
                borderBottomColor: '#ffffff',
            },
            birthday: ['2015年', '9月', '1日'],
            location: ['湖北', '武汉', '洪山区'],
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{height: 220}}>
                        <ImageBackground source={require('../images/Background12.png')} style={styles.backgroundImage}
                                         resizeMode="stretch">
                            <View style={styles.menu}>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('DrawerOpen');
                                    Picker.hide();
                                }}>
                                    <Image source={require('../images/icon-Menu.png')} style={styles.iconMenu}
                                           resizeMode="stretch"/>
                                </TouchableOpacity>
                                <View style={styles.avatar_con}>
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('DrawerOpen');
                                        Picker.hide();
                                    }}>
                                        <Image source={require('../images/icon-Camera.png')} style={styles.Camera}
                                               resizeMode="stretch"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        this.props.screenProps.drawerNav('Settings')
                                    }}>
                                        <Image source={require('../images/icon-Ellipses.png')} style={styles.Ellipses}
                                               resizeMode="stretch"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{paddingHorizontal: 25, flexDirection: 'row', marginTop: 30}}>
                                <View style={[styles.left, styles.flex]}>
                                    <View >
                                        <Text style={styles.week}>Settings</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.nav_con}>
                                <TouchableOpacity
                                    onPress={this._selectType.bind(this, 'day')}>
                                    <View style={[styles.nav, this.state.selectday]}>
                                        <Text style={styles.nav_text}>GENERAL</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={this._selectType.bind(this, 'week')}>
                                    <View style={[styles.nav, this.state.selectweek]}>
                                        <Text style={styles.nav_text}>ALERTS</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={this._selectType.bind(this, 'month')}>
                                    <View style={[styles.nav, this.state.selectmonth]}>
                                        <Text style={styles.nav_text}>SOCIAL</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                        <View style={[styles.mainview]}>
                            <View style={[styles.row]}>
                                <Image source={require('../images/icon-Profile.png')} style={styles.icon}
                                       resizeMode="stretch"/>
                                <TextInput style={styles.input}
                                           placeholder="Name"
                                           placeholderTextColor="rgb(29, 29, 38)"
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
                                <Image source={require('../images/Email.png')} style={styles.icon}
                                       resizeMode="stretch"/>
                                <TextInput style={styles.input}
                                           placeholder="Email"
                                           placeholderTextColor="rgb(29, 29, 38)"
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
                                <Image source={require('../images/Password.png')} style={styles.icon}
                                       resizeMode="stretch"/>
                                <TextInput style={styles.input}
                                           placeholder="Password"
                                           placeholderTextColor="rgb(29, 29, 38)"
                                           underlineColorAndroid="transparent"
                                           secureTextEntry={true}
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
                                <Image source={require('../images/Birth.png')} style={styles.icon}
                                       resizeMode="stretch"/>
                                <View style={{
                                    justifyContent: 'center', flex: 1, marginLeft: 23,
                                    paddingLeft: 3,
                                    height: 46,
                                    borderBottomWidth: Util.pixel,
                                    borderBottomColor: 'rgb(29, 29, 38)',
                                }}>
                                    <TouchableOpacity onPress={
                                        () => this._showDatePicker()
                                    }>
                                        <Text style={[{
                                            color: 'rgb(29, 29, 38)',
                                            fontSize: 14
                                        }]}>{this.state.birthday ? (this.state.birthday[0] + this.state.birthday[1] + this.state.birthday[2]) : "Birthday"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.row]}>
                                <Image source={require('../images/icon-Location.png')} style={{width: 15, height: 22}}
                                       resizeMode="stretch"/>
                                <View style={{
                                    justifyContent: 'center', flex: 1, marginLeft: 30,
                                    paddingLeft: 3,
                                    height: 46,
                                    borderBottomWidth: Util.pixel,
                                    borderBottomColor: 'rgb(29, 29, 38)',
                                }}>
                                    <TouchableOpacity onPress={
                                        () => this._showAreaPicker()
                                    }>
                                        <Text style={[{
                                            color: 'rgb(29, 29, 38)',
                                            fontSize: 14
                                        }]}>{this.state.location ? (this.state.location[0] + this.state.location[1] + this.state.location[2]) : "location"}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity onPress={this._modify.bind(this)}>
                                <View style={[styles.flex, styles.center]}>
                                    <View style={styles.btn}>
                                        <Text style={styles.btn_text}>Logout</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

    _selectType(type) {
        let obj = {};
        let items = {
            day: {},
            week: {},
            month: {}
        };
        obj['select' + type] = {
            borderBottomWidth: Util.pixel,
            borderBottomColor: '#ffffff',
        };
        this.setState(obj);
        delete items[type];
        for (let val in items) {
            let newObj = {};
            newObj['select' + val] = {};
            this.setState(newObj);
        }
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

    _createAreaData() {
        let data = [];
        let len = area.length;
        for (let i = 0; i < len; i++) {
            let city = [];
            for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    _showAreaPicker() {
        let that = this;
        Picker.init({
            pickerData: this._createAreaData(),
            selectedValue: this.state.Location,
            pickerTitleText: 'area picker',
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
                that.setState({
                    location: pickedValue
                });
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }


    _modify() {
        const {goBack} = this.props.navigation;
        let loginURL = Service.host + Service.addUser;
        let username = this.state.username;
        let password = this.state.password;
        let email = this.state.email;
        let birthday = this.state.birthday;
        const that = this;
        if (!username || !password || !email || !birthday) {
            Alert.alert('提示', '用户名或密码不能为空');
            return false;
        }
        birthday = birthday.split("-");
        that.setState({
            isLoadingShow: true
        });
        Util.post(loginURL, {
            username: username,
            password: password,
            email: email,
            birthday: new Date(birthday[0], birthday[1] - 1, birthday[2])
        }, function (data) {
            that.setState({
                isLoadingShow: false
            });
            if (data.status === 200) {
                Alert.alert('提示', '注册成功', [
                    {text: 'OK', onPress: () => goBack()},
                ],);
            } else {
                Alert.alert('提示', data.msg);
            }
        })
    }
}
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    item_con: {
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //祛除内部元素的白色背景
        backgroundColor: 'rgba(0,0,0,0)',
    },
    avatar_con: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingBottom: 0,
        backgroundColor: '#ffffff'
    },
    menu: {
        paddingTop: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    iconMenu: {
        width: 22,
        height: 17,
    },
    Camera: {
        width: 22,
        height: 21,
    },
    Ellipses: {
        width: 22,
        height: 5,
        marginLeft: 25,
    },
    left: {
        alignItems: 'flex-start'
    },
    week: {
        fontSize: 35,
        color: '#fff'
    },
    date: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: 10
    },
    local: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: 10
    },
    nav_con: {
        marginTop: 40,
        flexDirection: 'row',
    },
    nav: {
        marginLeft: 26,
        height: 28,
        justifyContent: 'center'
    },
    nav_text: {
        fontSize: 12,
        color: '#ffffff'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainview: {
        flex: 1,
        paddingLeft: 28,
        paddingTop: 20,
        borderBottomColor: '#565764',
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
        color: 'rgb(29, 29, 38)',
        fontSize: 14,
        flex: 1,
        marginLeft: 23,
        height: 46,
        borderBottomWidth: Util.pixel,
        borderBottomColor: 'rgb(29, 29, 38)',
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
});