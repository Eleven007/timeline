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
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import Util from '../common/util';
export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let color = ['#ba77ff', '#50d2c2', '#fcab53'];
        let bgColor = {};
        if (this.props.data.title) {
            bgColor = {
                backgroundColor: color[Math.ceil(Math.random() * 3 - 1)]
            };
        }
        return (
            <TouchableOpacity onPress={() => {
                if(this.props.data.id){
                    this.props.nav('Detail', {
                        noteId: this.props.data.id,
                    })
                }
            }}>
                <View style={[styles.flex, styles.item_con]}>
                    <View style={[styles.time]}>
                        <Text style={{fontSize: 25, color: '#1d1d26'}}>{this.props.time}</Text>
                        <Text style={{fontSize: 9, color: '#1d1d26'}}>{this.props.timeStatus === 0 ? 'AM' : 'PM'}</Text>
                    </View>
                    <View style={[styles.note, bgColor]}>
                        <View style={[styles.flex, {justifyContent: 'center'}]}>
                            <Text style={{fontSize: 16, color: '#ffffff'}}>{this.props.data.title}</Text>
                        </View>
                        <View style={[styles.flex, {justifyContent: 'center'}]}>
                            <Text
                                style={{fontSize: 13, color: 'rgba(255, 255, 255, 0.6)'}}>{this.props.data.desc}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    item_con: {
        flexDirection: 'row',
        minHeight: 80,
        alignItems: 'center',
        borderBottomWidth: Util.pixel * 2,
        borderBottomColor: 'rgba(29,29,38,0.05)',
    },
    time: {
        width: 75,
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    note: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 16,
        justifyContent: 'center'
    },
    avatar: {
        marginTop: 17,
        flexDirection: 'row',
    }
});