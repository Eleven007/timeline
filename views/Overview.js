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
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
        }, {
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
    {
        id: '5',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
    {
        id: '6',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
    {
        id: '7',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
    {
        id: '8',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
    {
        id: '9',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
    {
        id: '10',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
    {
        id: '11',
        time: '2',
        timeStatus: 1,
        title: 'Design Meeting',
        desc: 'Hangouts',
        people: [{
            userId: '11111',
            name: "用户1",
            avatar: 'http://mall-1253118667.cossh.myqcloud.com/user.jpg'
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
import Swiper from 'react-native-swiper';
import Util from './common/util';
export default class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <ImageBackground source={require('../images/Background5.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.menu}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('DrawerOpen')
                        }}>
                            <Image source={require('../images/icon-Menu.png')} style={styles.iconMenu}
                                   resizeMode="stretch"/>
                        </TouchableOpacity>
                        <View style={styles.avatar_con}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Settings')
                            }}>
                                <Image source={require('../images/Avatar.png')} style={styles.avatar}
                                       resizeMode="stretch"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.parentSlide}>
                        <Swiper style={styles.wrapper}
                                showsButtons={true}
                                showsPagination={false}
                                prevButton={<Image style={{width:10,height:17}} source={require('../images/prev.png')}></Image>}
                                nextButton={<Image style={{width:10,height:17}} source={require('../images/next.png')}></Image>}>
                            <View style={styles.slide1}>
                                <Text style={styles.text} >Hello Swiper</Text>
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.text}>Beautiful</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                        </Swiper>
                    </View>
                    <View style={{alignItems:'center',marginTop:20}}>
                        <View style={styles.childSlide}>
                            <Swiper style={styles.wrapper}
                                    showsButtons={true}
                                    showsPagination={false}
                                    prevButton={<Image style={{width:10,height:17}} source={require('../images/prev.png')}></Image>}
                                    nextButton={<Image style={{width:10,height:17}} source={require('../images/next.png')}></Image>}>
                                <View style={styles.slide1}>
                                    <Text style={styles.text2} >Hello Swiper</Text>
                                </View>
                                <View style={styles.slide2}>
                                    <Text style={styles.text2}>Beautiful</Text>
                                </View>
                                <View style={styles.slide3}>
                                    <Text style={styles.text2}>And simple</Text>
                                </View>
                            </Swiper>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
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
        borderRadius: 15,
    },
    parentSlide: {
        height: 50,
    },
    childSlide:{
        height: 30,
        width:300,
    },
    wrapper: {

    },
    slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
    },
    text2:{
        color: '#fff',
        fontSize: 16,
    }
});