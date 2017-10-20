/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/10/20
 * 历史修订：
 */
import React from 'react';
import ReactNative from 'react-native';
import PushActivity from './JPush/push_activity';
import SetActivity from './JPush/set_activity';
import SecondActivity from './JPush/second';

const {
    AppRegistry,
    BackAndroid,
} = ReactNative;
import {
    StackNavigator
} from 'react-navigation';
import JPushModule from 'jpush-react-native';

const PushDemoApp = StackNavigator({
    Home: {
        screen: PushActivity
    },
    Setting: {
        screen: SetActivity
    },
    Push: {
        screen: SecondActivity
    }
}, {
    navigationOptions: {
        header: null
    }
});
module.exports=PushDemoApp;