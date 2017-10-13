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
            slide1: {
                zIndex: 1,
                opacity: .5,
                width: 222,
                height: 324,
                marginTop: 38,
                left: 0,
            },
            pic1: {
                width: 222,
                height: 218,
            },
            slide2: {
                // left: 35,
                // top:0,
                zIndex: 2,
                width: 305,
                height: 400,
            },
            pic2: {
                width: 305,
                height: 270,
            },
            slide3: {
                marginTop: 38,
                zIndex: 1,
                right: 0,
                opacity: .5,
                width: 222,
                height: 324,
            },
            pic3: {
                width: 222,
                height: 218,
            },
            carouselIndex: 1,
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <ImageBackground source={require('../../images/Background6.png')} style={styles.backgroundImage}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => {
                                this.props.screenProps.drawerNav('DrawerOpen')
                            }}>
                                <Image source={require('../../images/icon-Menu.png')} style={styles.iconMenu}
                                       resizeMode="stretch"/>
                            </TouchableOpacity>
                            <View style={styles.avatar_con}>
                                <Text style={{fontSize: 12, color: '#ffffff', marginRight: 28}}>16</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.screenProps.drawerNav('Settings')
                                }}>
                                    <Image source={require('../../images/icon-Search.png')} style={styles.search}
                                           resizeMode="stretch"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 25, flexDirection: 'row', marginTop: 30}}>
                            <Text style={{fontSize: 35, color: '#ffffff'}}>Groups</Text>
                        </View>
                        <View style={styles.carouselWraper}>
                            <View style={styles.carousel}>
                                <View style={[styles.slide, this.state.slide1]}>
                                    <TouchableOpacity style={styles.center}>
                                        <Image source={require('../../images/Image.png')} style={this.state.pic1}
                                        >
                                        </Image>
                                        <View style={styles.pages}>
                                            <Text style={styles.pages_text}>12 / 24</Text>
                                        </View>
                                        <View style={styles.title}>
                                            <Text style={styles.title_text}>Salad</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.slide, this.state.slide2]}>
                                    <TouchableOpacity style={styles.center} onPress={()=>{this.props.navigation.navigate("Detail")}}>
                                        <Image source={require('../../images/Image.png')} style={this.state.pic2}
                                        >
                                        </Image>
                                        <View style={styles.pages}>
                                            <Text style={styles.pages_text}>12 / 24</Text>
                                        </View>
                                        <View style={styles.title}>
                                            <Text style={styles.title_text}>Salad</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.slide, this.state.slide3]}>
                                    <TouchableOpacity style={styles.center}>
                                        <Image source={require('../../images/Image.png')} style={this.state.pic3}
                                        >
                                        </Image>
                                        <View style={styles.pages}>
                                            <Text style={styles.pages_text}>12 / 24</Text>
                                        </View>
                                        <View style={styles.title}>
                                            <Text style={styles.title_text}>SalaSaladSaladSaladSaladd</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.dots}>
                                    <View
                                        style={[styles.dot, this.state.carouselIndex === 1 ? {backgroundColor: '#50d2c2'} : {backgroundColor: '#999999'}]}>

                                    </View>
                                    <View
                                        style={[styles.dot, this.state.carouselIndex === 2 ? {backgroundColor: '#50d2c2'} : {backgroundColor: '#999999'}]}>

                                    </View>
                                    <View
                                        style={[styles.dot, this.state.carouselIndex === 3 ? {backgroundColor: '#50d2c2'} : {backgroundColor: '#999999'}]}>

                                    </View>
                                </View>
                                <View style={styles.slideDots}>
                                    <View
                                        style={[styles.sdot, this.state.carouselIndex === 1 ? {backgroundColor: '#ffffff'} : ""]}>

                                    </View>
                                    <View
                                        style={[styles.sdot, this.state.carouselIndex === 2 ? {backgroundColor: '#ffffff'} : ""]}>

                                    </View>
                                    <View
                                        style={[styles.sdot, this.state.carouselIndex === 3 ? {backgroundColor: '#ffffff'} : ""]}>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
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
    carouselWraper: {
        marginTop: 50,
        height: 456
    },
    carousel: {
        flex: 1,
        height: 456,
        position: 'relative',
        justifyContent: 'center',
        flexDirection: 'row'

    },
    slide: {
        overflow: "hidden",
        position: 'absolute',
        backgroundColor: "#ffffff",
        borderRadius: 2,
        alignItems: 'center'
    },
    pages: {
        marginTop: 20,

    },
    pages_text: {
        fontSize: 11,
        color: "rgba(29, 29, 38, 0.5)"
    },
    title: {
        marginTop: 10,
    },
    title_text: {
        fontSize: 30,
        color: "#1d1d26"
    },
    dots: {
        position: 'absolute',
        bottom: 87,
        flex: 1,
        zIndex: 1000,
        flexDirection: "row"
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 8,
        marginLeft: 8
    },
    slideDots: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        zIndex: 11000,
        width: 150,
        height: 1,
        flexDirection: "row",
        backgroundColor: 'rgba(255,255,255,.3)'
    },
    sdot: {
        width: 50
    }
});