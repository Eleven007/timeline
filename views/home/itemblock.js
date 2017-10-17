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
        let People=[];
        this.props.people.map(function (val,index) {
            People.push(
                <View key={index}>
                    <Image source={{uri:val.avator}} style={{width: 30, height: 30,borderRadius:15,marginRight:10}}/>
                </View>
            )
        });
        return (
            <TouchableOpacity onPress={()=>{
                this.props.nav('Detail',{
                    noteId:this.props.id,
                })
            }}>
                <View style={[styles.flex,styles.item_con]}>
                    <View style={[styles.time]}>
                       <Text style={{fontSize:25,color:'#fff'}}>{this.props.time}</Text>
                       <Text style={{fontSize:9,color:'#fff'}}>{this.props.timeStatus===0?'AM':'PM'}</Text>
                    </View>
                    <View style={[styles.note]}>
                        <View style={[styles.flex,{justifyContent:'center'}]}>
                            <Text style={{fontSize:16,color:'#fff'}}>{this.props.title}</Text>
                        </View>
                        {
                            this.props.desc?
                                <View style={[styles.flex,{justifyContent:'center'}]}>
                                    <Text style={{fontSize:13,color:'rgba(255, 255, 255, 0.6)'}}>{this.props.desc}</Text>
                                </View>:null
                        }
                        {
                            People.length>0?
                                <View style={styles.avatar}>
                                    {People}
                                </View>:null
                        }

                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    item_con:{
        flexDirection:'row',
        minHeight:80,
        alignItems:'center',
    },
    time:{
        width:80,
        alignItems:'center',
        paddingRight:20,
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    note:{
        borderBottomWidth:Util.pixel*2,
        flex:1,
        borderBottomColor:'rgba(255,255,255,0.2)',
        paddingVertical:10,
        justifyContent:'center'
    },
    avatar:{
        marginTop:17,
        flexDirection:'row',
    }
});