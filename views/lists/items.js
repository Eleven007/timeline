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
    AsyncStorage
} from 'react-native';
import Util from '../common/util';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 200}}>
                    <ImageBackground source={require('../../images/Background8.png')} style={styles.backgroundImage}
                                     resizeMode="stretch">
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => {
                                this.props.screenProps.drawerNav('DrawerOpen')
                            }}>
                                <Image source={require('../../images/icon-back.png')} style={styles.iconMenu}
                                       resizeMode="stretch"/>
                            </TouchableOpacity>
                            <View style={styles.avatar_con}>
                                <Text style={{fontSize: 12, color: '#ffffff', marginRight: 28,}}>12/24</Text>
                                <TouchableOpacity onPress={() => {
                                }}>
                                    <Image source={require('../../images/icon-Search.png')} style={styles.search}
                                           resizeMode="stretch"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 25, flexDirection: 'row', marginTop: 30}}>
                            <Text style={{fontSize: 35, color: '#ffffff'}}>Salad</Text>
                        </View>
                    </ImageBackground>
                </View>
                <TouchableOpacity style={styles.add}>
                    <View>
                        <Image source={require('../../images/icon-Plus.png')} style={styles.icon_add}/>
                    </View>
                </TouchableOpacity>
                <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                    <ScrollView>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Carrots</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.check} source={require('../../images/check.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Nuts</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Lettuce</Text>
                            <Image style={styles.star} source={require('../../images/icon-Star.png')}
                                   resizeMode="stretch"/>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Arugula</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Dressing</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Cheese</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Lime</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.check} source={require('../../images/check.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Cheese</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Carrots</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Cheese</Text>
                        </View>
                        <View style={styles.item}>
                            <Image style={styles.circ} source={require('../../images/Status.png')}
                                   resizeMode="stretch"/>
                            <Text style={styles.item_text}>Carrots</Text>
                        </View>

                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    flex: {
        flex: 1,
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
        height: 20,
    },
    search: {
        width: 22,
        height: 22,
    },
    add: {
        position: 'absolute',
        top: 172,
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
    item: {
        flexDirection: 'row',
        alignItems: "center",
        height:64,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#1d1d26',
        marginBottom:1,
    },
    circ: {
        width: 25,
        height: 25,
        marginLeft:25,
        marginRight:20,
    },
    check:{
        width: 25,
        height: 16,
        marginLeft:25,
        marginRight:20,
    },
    star:{
        width: 22,
        height: 21,
        marginRight:25
    },
    item_text:{
        fontSize:16,
        color:'#1d1d26',
        flex:1
    }
});