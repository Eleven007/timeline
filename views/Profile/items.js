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
    AsyncStorage
} from 'react-native';
import Util from '../common/util';
import NoteItem from './itemblock';
export default class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let items = [];
        let that = this;
        noteList.map(function (val, index) {
            items.push(
                <NoteItem time={val.time}
                          id={val.id}
                          timeStatus={val.timeStatus}
                          title={val.title}
                          desc={val.desc}
                          people={val.people}
                          key={val.id}
                          nav={that.props.navigation.navigate}
                />
            )
        });
        return (
            <View style={styles.container}>
                <View style={{height: 310}}>
                    <ImageBackground source={require('../../images/Background10.png')} style={styles.backgroundImage}>
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => {
                                this.props.screenProps.drawerNav('DrawerOpen')
                            }}>
                                <Image source={require('../../images/icon-Menu.png')} style={styles.iconMenu}
                                       resizeMode="stretch"/>
                            </TouchableOpacity>
                            <View style={styles.avatar_con}>
                                <TouchableOpacity onPress={() => {
                                    this.props.screenProps.drawerNav('Settings')
                                }}>
                                    <Image source={require('../../images/Avatar.png')} style={styles.avatar}
                                           resizeMode="stretch"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 25, flexDirection: 'row', marginTop: 40}}>
                            <View style={[styles.left, styles.flex]}>
                                <View >
                                    <Text style={styles.week}>Adam Lane</Text>
                                </View>
                                <View >
                                    <Text style={styles.date}>Photographer</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{paddingHorizontal: 25,height:70,flexDirection:'row',alignItems:'center',backgroundColor:' rgb(248, 248, 248)'}}>
                    <Text style={{color: 'rgb(29, 29, 38)',flex:1}}>JANUARY 2015</Text>
                    <View style={styles.switch}>
                        <TouchableOpacity>
                            <Image source={require('../../images/pv.png')} style={{width:9,height:16,marginRight:56}}  resizeMode="stretch"></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../images/nt.png')} style={{width:9,height:16}}  resizeMode="stretch"></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{paddingLeft: 25, flex: 1,backgroundColor:'#ffffff'}}>
                    <ScrollView>
                        {items}
                    </ScrollView>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    switch:{
      flexDirection:'row'
    },
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
        borderRadius: 15,
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