/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/30
 * 历史修订：
 */
let noteList = [
    {
        id: '1',
        time: '8',
        timeStatus: 0,
        title: 'Finish Home Screen',
        desc: 'Web App',
        people: []
    },
    {
        id: '2',
        time: '12',
        timeStatus: 0,
        title: 'Lunch Break',
        desc: '',
        people: []
    },
    {
        id: '3',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '4',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '5',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '6',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '7',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '8',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '9',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '10',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '11',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
    {
        id: '12',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }]
    },
];
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
    RefreshControl
} from 'react-native';
import Util from '../common/util';
import Service from '../common/Service';
import NoteItem from './itemblock';
import co from 'co';
import SplashScreen from 'react-native-splash-screen'
import {skipLogin, logOut} from '../../redux/actions/user';
import store from '../../redux/store'
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            week: '',
            date: '',
            weather: '',
            city: '',
            temp: '',
            noteList: [],
            isLoadingShow: true,
            isRefreshing: false,
        }
    }

    componentDidMount() {
        SplashScreen.hide();
        let [weatherUri, weatherAppCode, noteUri] = [Service.weatherURL + '?city=' + '武汉', Service.weatherAppCode, Service.noteUri];
        let that = this;
        Util.getJSON(weatherUri, {
            headers: {
                "Authorization": "APPCODE " + weatherAppCode
            }
        }, function (json) {
            if (json.status === '0') {
                let monthArr = ['January ', 'February', 'March', 'April', 'May ', 'June ', 'July', 'August ', 'September ', 'October ', 'November', 'December'];
                let dateTime = new Date(json.result.date);
                let dateStr = monthArr[dateTime.getMonth()] + ',' + dateTime.getDate() + ',' + dateTime.getFullYear();
                that.setState({
                    week: json.result.week,
                    date: dateStr,
                    weather: json.result.weather,
                    city: json.result.city,
                    temp: json.result.temp,
                    isLoadingShow: false,
                })
            }
        }, function () {
            that.setState({
                isLoadingShow: false,
            })
        });
        AsyncStorage.getItem('userInfo', function (err, userInfo) {
            let userId = JSON.parse(userInfo).id;
            that.setState({
                avator: JSON.parse(userInfo).avator
            });
            Util.getJSON(Service.host + noteUri.getNote + "?userId=" + userId, {}, function (json) {
                that.setState({
                    noteList: json.data,
                    avator: JSON.parse(userInfo).avator
                })
            }, function (e) {
            })
        });
    }

    render() {
        let items = [];
        let that = this;
        this.state.noteList.map(function (val, index) {
            items.push(
                <NoteItem time={val.beginTime}
                          id={val.id}
                          timeStatus={val.timestatus}
                          title={val.title}
                          desc={val.desc}
                          people={val.User2Note || []}
                          key={val.id}
                          nav={that.props.navigation.navigate}
                />
            )
        });
        return (
            <ImageBackground source={require('../../images/Background4.png')} style={styles.backgroundImage}>
                {
                    this.state.isLoadingShow ?
                        Util.loading
                        : <View style={styles.container}>
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => {
                                this.props.screenProps.drawerNav('DrawerOpen')
                            }}>
                                <Image source={require('../../images/icon-Menu.png')} style={styles.iconMenu}
                                       resizeMode="stretch"/>
                            </TouchableOpacity>
                            <View style={styles.avatar_con}>
                                <TouchableOpacity onPress={() => {
                                    store.dispatch(skipLogin());
                                }}>
                                    <Image source={{uri: this.state.avator}} style={styles.avatar}
                                           resizeMode="stretch"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 25, flexDirection: 'row', marginTop: 40}}>
                            <View style={[styles.left, styles.flex]}>
                                <View >
                                    <Text style={styles.week}>{this.state.week}</Text>
                                </View>
                                <View >
                                    <Text style={styles.date}>{this.state.date}</Text>
                                </View>
                            </View>
                            <View style={[styles.right, styles.flex]}>
                                <View style={styles.weather}>
                                    <Image source={require('../../images/icon-Sunny.png')} style={styles.icon_weather}
                                           resizeMode="stretch"/>
                                    <Text style={{
                                        fontSize: 16,
                                        color: '#fff',
                                        marginLeft: 10
                                    }}>{this.state.weather}</Text>
                                    <Text
                                        style={{fontSize: 40, color: '#fff', marginLeft: 10}}>{this.state.temp}°</Text>
                                </View>
                                <View >
                                    <Text style={styles.local}>{this.state.city}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop: 30, flex: 1}}>
                            <ScrollView refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isRefreshing}
                                    onRefresh={this._onRefresh}
                                    tintColor="#ff0000"
                                    title="Loading..."
                                    titleColor="#00ff00"
                                    colors={['#ff0000', '#00ff00', '#0000ff']}
                                    progressBackgroundColor="#ffff00"
                                />

                            }>
                                {items}
                            </ScrollView>
                        </View>
                        <TouchableOpacity style={styles.add}>
                            <View>
                                <Image source={require('../../images/icon-Plus.png')} style={styles.icon_add}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
            </ImageBackground>
        )
    }

    _onRefresh() {
        let noteUri = Service.noteUri;
        let that = this;
        AsyncStorage.getItem('userInfo', function (err, userInfo) {
            let userId = JSON.parse(userInfo).id;
            Util.getJSON(Service.host + noteUri.getNote + "?userId=" + userId, {}, function (json) {
                that.setState({
                    noteList: json.data,
                })
            }, function (e) {
            })
        });
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
        //resizeMode:Image.resizeMode.contain,
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
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    left: {
        alignItems: 'flex-start'
    },
    right: {
        alignItems: 'flex-end'
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
    weather: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon_weather: {
        width: 25,
        height: 25
    },
    local: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: 10
    },
    add: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 11111,
        backgroundColor: '#ff3366',
        borderRadius: 55,
    },
    icon_add: {
        width: 22,
        height: 22
    }
});