/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Routers from './views/StackNavigator';
export default class timeline extends Component {
    render() {
        return (
            <Routers>
            </Routers>
        );
    }
}

AppRegistry.registerComponent('timeline', () => timeline);
