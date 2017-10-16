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
} from 'react-native';
export default class extends Component{
    render(){
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text style={{fontSize:20,color:'#fff'}}>{params.noteId}</Text>
            </View>
        )
    }
}