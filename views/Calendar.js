/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/30
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
    ScrollView
} from 'react-native';
import Util from './common/util';
export default class extends Component{
    render(){
        return(
            <ImageBackground source={require('../images/Background4.png')} style={styles.backgroundImage}>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('DrawerOpen')
                    }}>
                        <Image source={require('../images/icon-Menu.png')} style={styles.iconMenu} resizeMode="stretch"/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
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
    menu: {
        paddingTop:30,
        paddingLeft:15
    },
    iconMenu:{
        width: 22,
        height: 17,
    },
});