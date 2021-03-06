/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/20
 * 历史修订：
 */
import React from 'react';
import {
    Dimensions,
    PixelRatio,
    ActivityIndicator,
    View
} from 'react-native';

let Util = {
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    //普通post请求
    post: function (url, data, callback) {
        let fetchOption = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        fetch(url, fetchOption)
            .then((response) => response.json())
            .then((responseJson) => {
                callback(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });

    },
    //post请求
    postJSON: function (url, option, callback) {
        let defaultOption = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        let fetchOption = Object.assign(defaultOption, option);
        fetch(url, fetchOption)
            .then((response) => response.json())
            .then((responseJson) => {
                callback(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });

    },
    getJSON: function (url,fetchOption, successCallback, failCallback) {
        fetch(url,fetchOption)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback&&successCallback(JSON.parse(responseText));
            })
            .catch((error) => {
                failCallback&&failCallback(error);
            });
    },
    /*loading效果*/
    loading: <View style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100000,
        flex: 1,
        height: 60,
        width: 60,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 10,
        left: Dimensions.get('window').width / 2 - 30,
        top: Dimensions.get('window').height / 2 - 30,
    }}>
        <ActivityIndicator size="large" color="#ffffff"/>
    </View>
};
module.exports = Util;