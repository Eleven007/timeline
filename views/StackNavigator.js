/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/29
 * 历史修订：
 */
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Index from './index';
import Register from './register';
import WalkThrough from './walkthrough';
import DrawerHome from './DrawerNavigator';
const ModalStack = StackNavigator({
    Index: {
        screen: Index,
    },
    Register: {
        screen: Register,
    },
    DrawerHome: {
        screen: DrawerHome,

    },
    WalkThrough: {
        screen: WalkThrough,
    }
}, {
    navigationOptions: {
        header: null
    }
});
module.exports = ModalStack;
