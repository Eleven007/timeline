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
        let People = [];
        this.props.people.map(function (val, index) {
            People.push(
                <View key={index}>
                    <Image source={{uri: val.avatar}}
                           style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}}/>
                </View>
            )
        });
        return (
            <TouchableOpacity onPress={() => {
                this.props.nav('Detail', {
                    noteId: this.props.id,
                })
            }}>
                <View style={[styles.flex, styles.item_con]}>
                    <View style={[styles.note]}>
                        <View style={[styles.flex, {alignItems:'center',flexDirection:'row'}]}>
                            {
                                this.props.timeStatus === 0 ?
                                    <View style={[styles.point, styles.green]}>
                                    </View>
                                    :
                                    <View style={[styles.point, styles.yellow]}>
                                    </View>
                            }<Text style={{fontSize: 16, color: 'rgb(29, 29, 38)'}}>{this.props.title}</Text>
                        </View>
                        {
                            this.props.desc ?
                                <View style={[styles.flex, {justifyContent: 'center',paddingLeft:34}]}>
                                    <Text
                                        style={{fontSize: 13, color: 'rgba(29, 29, 38, 0.6)'}}>{this.props.desc}</Text>
                                </View> : null
                        }
                        {
                            People.length > 0 ?
                                <View style={[styles.avatar,{paddingLeft:34}]}>
                                    {People}
                                </View> : null
                        }

                    </View>
                    <View style={[styles.time]}>
                        <Text style={{fontSize: 25, color: 'rgb(29, 29, 38)'}}>{this.props.time}</Text>
                        <Text style={{
                            fontSize: 9,
                            color: 'rgb(29, 29, 38)'
                        }}>{this.props.timeStatus === 0 ? 'AM' : 'PM'}</Text>
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
        borderBottomWidth: Util.pixel,
        borderBottomColor: 'rgb(29, 29, 38)',
    },
    time: {
        width: 50,
        alignItems: 'center',
        paddingRight: 20,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    note: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    avatar: {
        marginTop: 17,
        flexDirection: 'row',
    },
    point: {
        width: 8,
        height: 8,
        borderRadius: 8,
        marginRight: 26
    },
    green: {
        backgroundColor: 'rgb(80, 210, 194)',
    },
    yellow: {
        backgroundColor: 'rgb(252, 171, 83)',
    }
});