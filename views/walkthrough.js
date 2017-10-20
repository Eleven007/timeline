/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/29
 * 历史修订：
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    AsyncStorage
} from 'react-native';
import Util from './common/util';

import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from '../redux/actions/todoApp';
import {skipLogin, logOut} from '../redux/actions/user';
import store from '../redux/store'
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '初始数据',
        }
    }

    componentDidMount() {
        let that = this;
        let unsubscribe = store.subscribe(() => {
            that.setState({
                msg:store.getState().userStore.user ? store.getState().userStore.user.name : ""
            })
            }
        );
    }

    render() {
        return (
            <ImageBackground source={require('../images/Background3.png')}
                             style={styles.backgroundImage}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={[styles.center, {marginTop: 70}]}>
                            <Text style={{fontSize: 30, color: '#ffffff'}}>
                                Walkthrough
                            </Text>
                        </View>
                        <View style={styles.edit}>
                            <View style={styles.mask}>
                                <TouchableOpacity>
                                    <Image source={require('../images/icon-Edit.png')} style={styles.icon_edit}
                                           resizeMode="stretch"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.center, {marginTop: 100}]}>
                            <View style={styles.tip}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 15,
                                    color: '#fff',
                                    lineHeight: 25
                                }}>{this.state.msg}</Text>
                            </View>
                        </View>
                        <View style={[styles.center, styles.btn_con]}>
                            <TouchableOpacity onPress={this._loadPage.bind(this)}>
                                <View style={[styles.btn, styles.btn1]}><Text style={styles.btn_text}>Skip</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._loadPage.bind(this)}>
                                <View style={[styles.btn, styles.btn2]}><Text style={styles.btn_text}>Next</Text></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }

    _loadPage() {
        const {navigate} = this.props.nav;
        AsyncStorage.getItem('userInfo', function (err, userInfo) {
            navigate("DrawerHome", {
                stackNav: navigate,
                userInfo: userInfo
            });
        });

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
    edit: {
        alignItems: 'center',
        marginTop: 45,
    },
    mask: {
        width: 130,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 65
    },
    icon_edit: {
        width: 42,
        height: 42
    },
    tip: {
        width: 210
    },
    btn_con: {
        flexDirection: 'row',
        marginTop: 106,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
        borderWidth: Util.pixel,
    },
    btn_text: {
        fontSize: 15,
        color: '#fff'
    },
    btn1: {
        borderColor: 'rgba(255,255,255,0.2)'
    },
    btn2: {
        marginLeft: 25,
        borderColor: "transparent",
        backgroundColor: "#ff3366"
    }
});
