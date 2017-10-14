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
        time: '2',
        timeStatus: 1,
        title: 'Lunch Break',
        desc: '',
        people: []
    },
    {
        id: '3',
        time: '4',
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
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
        this.state = {
            selectday: {
                borderBottomWidth: 2,
                borderBottomColor: '#ffffff',
            }
        }
    }

    componentDidMount() {
    }

    render() {
        let items = [];
        let that = this;
        let time = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        let timeStatus = [0, 1];
        timeStatus.map(function (val, index) {
            time.map(function (val2, index2) {
                let obj = {};
                noteList.map(function (val3, index) {
                    if (val3.timeStatus === val && val3.time === val2) {
                        obj = val3;
                    }
                });
                items.push(
                    <NoteItem time={val2}
                              timeStatus={val}
                              data={obj}
                              key={index.toString() + index2}
                              nav={that.props.navigation.navigate}
                    />
                )
            });
        });
        return (
            <View style={styles.container}>
                <View style={{height: 220}}>
                    <ImageBackground source={require('../../images/hd1.png')} style={styles.backgroundImage}
                                     resizeMode="stretch">
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
                                    <Image source={require('../../images/icon-Search.png')} style={styles.search}
                                           resizeMode="stretch"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 25, flexDirection: 'row', marginTop: 30}}>
                            <View style={[styles.left, styles.flex]}>
                                <View >
                                    <Text style={styles.week}>Thursday</Text>
                                </View>
                                <View >
                                    <Text style={styles.date}>February 19, 2015</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.nav_con}>
                            <TouchableOpacity
                                onPress={this._selectType.bind(this, 'day')}>
                                <View style={[styles.nav,this.state.selectday]}>
                                    <Text style={styles.nav_text}>DAY</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this._selectType.bind(this, 'week')}>
                                <View style={[styles.nav,this.state.selectweek]}>
                                    <Text style={styles.nav_text}>WEEK</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this._selectType.bind(this, 'month')}>
                                <View style={[styles.nav,this.state.selectmonth]}>
                                    <Text style={styles.nav_text}>MONTH</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                    <ScrollView>
                        {items}
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.add} onPress={()=>{
                    this.props.navigation.navigate("Detail",{

                    })
                }}>
                    <View>
                        <Image source={require('../../images/icon-Plus.png')} style={styles.icon_add}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    _selectType(type){
        let obj = {};
        let items = {
            day:{},
            week:{},
            month:{}
        };
        obj['select' + type]={
            borderBottomWidth: 2,
            borderBottomColor: '#ffffff',
        };
        for (let val in items){
            let newObj = {};
            newObj['select' + val] = {
                borderBottomWidth: 0,
                borderBottomColor: 'transparent',
            };
            this.setState(newObj);
        }
        this.setState(obj);
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
    search: {
        width: 22,
        height: 22,
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
    add: {
        position: 'absolute',
        top: 192,
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
    },
    nav_con: {
        marginTop: 20,
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
    }
});