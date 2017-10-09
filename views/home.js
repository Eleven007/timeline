/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/29
 * 历史修订：
 */
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Items from './home/items';
import Detail from './home/detail';
const ModalStack = StackNavigator({
    Items: {
        screen: Items
    },
    Detail: {
        screen: Detail,
    },
}, {
    navigationOptions: {
        header: null
    }
});
export default class extends Component {
    render() {
        return (
            <ModalStack screenProps={
                {
                    drawerNav:this.props.navigation.navigate
                }
            }/>
        )
    }
}