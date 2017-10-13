/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/30
 * 历史修订：
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import {DrawerNavigator, DrawerItems, NavigationActions} from 'react-navigation';
import Index from './index';
import Home from './home';
import Calendar from './Calendar';
import Groups from './Groups';
import Lists from './Lists';
import Overview from './Overview';
import Profile from './Profile';
import Settings from './Settings';
import Timeline from './Timeline';
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: 'Index',
            params: {
                swichType: 'Logout'
            }
        })
    ]
});
const ModalStack = DrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerIcon: () => (
                <View>
                    <Image
                        source={require('../images/icon-Home.png')}
                        style={styles.icon}
                        resizeMode="stretch"
                    />
                </View>
            )
        }
    },
    Calendar: {
        screen: Calendar,
        navigationOptions: {
            drawerIcon: () => (
                <View>
                    <Image
                        source={require('../images/icon-Calendar.png')}
                        style={styles.icon}
                        resizeMode="stretch"
                    />
                </View>
            )
        }
    },
    Overview: {
        screen: Overview,
        navigationOptions: {
            drawerIcon: () => (
                <View>
                    <Image
                        source={require('../images/icon-Overview.png')}
                        style={styles.icon}
                        resizeMode="stretch"
                    />
                </View>
            )
        },
    },
    Groups: {
        screen: Groups,
        navigationOptions: {
            drawerIcon: () => (
                <View>
                    <Image
                        source={require('../images/icon-Groups.png')}
                        style={styles.icon}
                        resizeMode="stretch"
                    />
                </View>
            )
        }
    },
    Lists: {
        screen: Lists,
        navigationOptions: {
            drawerIcon: () => (
                <View>
                    <Image
                        source={require('../images/icon-Lists.png')}
                        style={styles.icon}
                        resizeMode="stretch"
                    />
                </View>
            )
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            drawerIcon: () => (
                <View>
                    <Image
                        source={require('../images/icon-Profile.png')}
                        style={styles.icon}
                        resizeMode="stretch"
                    />
                </View>
            )
        }
    },
    Timeline: {
        screen: Timeline,
        navigationOptions: {
            drawerIcon: () => (
                <View>
                    <Image
                        source={require('../images/icon-Timeline.png')}
                        style={styles.icon}
                        resizeMode="stretch"
                    />
                </View>
            )
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            drawerIcon: () => (
                <View>
                    <Image
                        source={require('../images/icon-Settings.png')}
                        style={styles.icon}
                        resizeMode="stretch"
                    />
                </View>
            )
        }
    }
}, {
    drawerWidth: 315, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: (props) => {
        return (
            <ScrollView>
                <View>
                    <View style={styles.userInfo}>
                        <View style={styles.name}>
                            <Text style={{color: '#1d1d26',fontSize:35}}>{JSON.parse(props.screenProps.userInfo).name}</Text>
                        </View>
                        <View style={[styles.email,{marginTop:12}]}>
                            <Text style={{color: 'rgba(29, 29, 38, 0.6)',fontSize:13}}>{JSON.parse(props.screenProps.userInfo).email}</Text>
                        </View>
                    </View>
                    <DrawerItems {...props} />
                    <TouchableOpacity onPress={() => {
                        props.screenProps.dispatch(resetAction);
                    }}>
                        <View style={{flexDirection: 'row', paddingLeft: 20, height: 56, alignItems: 'center'}}>
                            <Image
                                source={require('../images/icon-Logout.png')}
                                style={styles.icon}
                                resizeMode="stretch"
                            />
                            <Text style={{marginLeft: 32, color: '#1d1d26'}}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    },
    contentOptions: {
        initialRouteName: Home, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff3366', // 选中背景颜色
        inactiveTintColor: '#1d1d26',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
        },
        labelStyle: {
            fontWeight: '400'
        },
    },
});
const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
    },
    userInfo: {
        paddingVertical: 40,
        paddingHorizontal: 26,
        backgroundColor: '#ffffff',
    },

});
export default class extends Component {
    render() {
        const {params} = this.props.navigation.state;
        const {dispatch}=this.props.navigation;
        return (
            <ModalStack screenProps={{
                userInfo: params.userInfo,
                dispatch:dispatch
            }}/>
        )
    }
}