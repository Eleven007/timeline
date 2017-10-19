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
    AsyncStorage
} from 'react-native';
import Util from './common/util';
import Service from './common/Service';
import WalkThrough from './walkthrough';
import {NavigationActions} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        // NavigationActions.navigate({ routeName: 'Index'})
    ]
});
export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            showIndex: false,
            showLogin: false,
            isLoadingShow: false,
        }
    }
    componentWillMount() {
        let that = this;
        if (this.props.navigation.state.params && this.props.navigation.state.params.swichType === "Logout") {
            AsyncStorage.clear();
            that.setState({
                showIndex: false,
                showLogin: true,

            })
        }
    }
    componentDidMount() {
        setTimeout(function () {
            SplashScreen.hide();
        },2000);
        const {navigate} = this.props.navigation;
        let that = this;
        AsyncStorage.getItem('userInfo', function (err, userInfo) {
            if (!err && userInfo) {
                let token = JSON.parse(userInfo).token;
                if (token) {
                    that.setState({
                        showIndex: true,
                    })
                } else {
                    that.setState({
                        showLogin: true,
                    })
                }
            } else {
                that.setState({
                    showLogin: true,
                })
            }
        });
    }

    render() {
        return (
            <View style={styles.flex}>
                {
                    this.state.showIndex ? <WalkThrough nav={this.props.navigation}/> :
                        this.state.showLogin ?
                            <ImageBackground source={require('../images/Background.png')}
                                             style={styles.backgroundImage}>
                                <ScrollView>
                                    <View style={[styles.container]}>
                                        <View style={[styles.center]}>
                                            <Image source={require('../images/Logo.png')} style={styles.logo}/>
                                        </View>
                                        <View style={[styles.row, {marginTop: 60}]}>
                                            <Image source={require('../images/icon-Username.png')} style={styles.icon}
                                                   resizeMode="stretch"/>
                                            <TextInput style={styles.input}
                                                       placeholder="Username"
                                                       placeholderTextColor="#ffffff"
                                                       underlineColorAndroid="transparent"
                                                       autoCapitalize="none"
                                                       onChangeText={(val) => {
                                                           this.setState({
                                                               username: val
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
                                                       secureTextEntry={true}
                                                       onChangeText={(val) => {
                                                           this.setState({
                                                               password: val
                                                           })
                                                       }}
                                            >
                                            </TextInput>
                                            <TouchableOpacity
                                                style={{position: 'absolute', right: 25, zIndex: 11111, top: 13}}
                                                onPress={
                                                    () => {
                                                        AsyncStorage.clear();
                                                    }
                                                }
                                            >
                                                <Image source={require('../images/icon-Forgot-Password.png')}
                                                       style={[styles.icon]}
                                                       resizeMode="stretch"/>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity onPress={this._login.bind(this)}>
                                            <View style={[styles.flex, styles.center]}>
                                                <View style={styles.btn}>
                                                    <Text style={styles.btn_text}>Sign in</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={[styles.center, styles.tip]}>
                                            <Text style={{fontSize: 13}}>Don’t have an account?</Text>
                                            <TouchableOpacity onPress={this._loadRegiter.bind(this)}>
                                                <Text style={{color: '#ffffff', marginLeft: 6, fontSize: 13}}>Sign
                                                    Up</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {
                                            this.state.isLoadingShow ?
                                                Util.loading
                                                : null
                                        }
                                    </View>
                                </ScrollView>
                            </ImageBackground>
                            : Util.loading
                }
            </View>
        )
    }

    _login() {
        let loginURL = Service.host + Service.userUri.login;
        let username = this.state.username;
        let password = this.state.password;
        const that = this;
        if (!username || !password) {
            Alert.alert('提示', '用户名或密码不能为空');
            return false;
        }
        that.setState({
            isLoadingShow: true
        });
        Util.post(loginURL, {
            username: username,
            password: password
        }, function (data) {
            that.setState({
                isLoadingShow: false
            });
            if (data.status === 200) {
                let user = data.data;
                user.password=password;
                AsyncStorage.setItem('userInfo', JSON.stringify(user), function (err) {
                    if (err) {
                        Alert.alert('提示', '登录失败！请刷新重试');
                    } else {
                        that.setState({
                            showIndex: true,
                            showLogin: false,
                        })
                    }
                })
            } else {
                Alert.alert('提示', data.msg);
            }
        })
    }

    _loadRegiter() {
        const {navigate} = this.props.navigation;
        navigate("Register");
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
    container: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex: {
        flex: 1,
    },
    logo: {
        width: 175,
        height: 136,
        marginTop: 50
    },
    row: {
        flexDirection: 'row',
        paddingLeft: 27,
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
    tip: {
        marginTop: 30,
        flexDirection: 'row'
    }
});