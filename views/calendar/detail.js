/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/30
 * 历史修订：
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    TextInput,
    Alert,
    AsyncStorage
} from 'react-native';
import Util from '../common/util';
import Picker from 'react-native-picker';
import area from '../common/area.json';
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ['2015年','9月','1日'],
            Location: ['湖北', '武汉', '洪山区'],
            Notification: "20 minutes before",
            Repeat: "none",
        }
    }

    componentDidMount() {

    }

    render() {
        const {state, navigate, goBack} = this.props.navigation;
        const noteId = state.params.noteId || "";
        return (
            <View style={styles.container}>
                <View style={{height: 200}}>
                    <ImageBackground source={require('../../images/Background9.png')} style={styles.backgroundImage}
                                     resizeMode="stretch">
                        <View style={styles.menu}>
                            <TouchableOpacity onPress={() => {
                                goBack();
                            }}>
                                <Image source={require('../../images/icon-Cross.png')} style={styles.iconMenu}
                                       resizeMode="stretch"/>
                            </TouchableOpacity>
                            <View style={styles.avatar_con}>
                                <TouchableOpacity onPress={() => {
                                }}>
                                    <Image source={require('../../images/icon-Image.png')} style={styles.search}
                                           resizeMode="stretch"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 25, flexDirection: 'row', marginTop: 30}}>
                            <Text style={{fontSize: 35, color: '#ffffff'}}>Design Meeting</Text>
                        </View>
                    </ImageBackground>
                </View>
                <TouchableOpacity style={styles.add}>
                    <View>
                        <Image source={require('../../images/icon-Edit2.png')} style={styles.icon_add}/>
                    </View>
                </TouchableOpacity>
                <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 10}}>
                    <ScrollView>
                        <View style={styles.item}>
                            <TextInput style={[styles.item_label, {paddingHorizontal: 0}]}
                                       placeholder="Please enter a title" value="Design Meeting"
                                       underlineColorAndroid="transparent"/>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.item_label}>Date</Text>
                            <Text style={styles.item_text}>{this.state.date[0]+this.state.date[1]+this.state.date[2]}</Text>
                            <TouchableOpacity onPress={this._showDatePicker.bind(this)}>
                                <Image source={require('../../images/add.png')} style={styles.datePicker}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.item_label}>Location</Text>
                            <TouchableOpacity onPress={this._showAreaPicker.bind(this)}>
                                <Text style={styles.item_text}>{this.state.Location[0]+this.state.Location[1]+this.state.Location[2]}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.item_label}>Notification</Text>
                            <TouchableOpacity onPress={this._showAreaPicker.bind(this)}>
                                <Text style={styles.item_text}>{this.state.Notification}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.item_label}>Who’s going</Text>
                            <TouchableOpacity >
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={{uri: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'}}
                                           style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}}/>
                                    <Image source={{uri: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'}}
                                           style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}}/>
                                    <Image source={{uri: 'https://mall-1253118667.cossh.myqcloud.com/user.jpg'}}
                                           style={{width: 30, height: 30, borderRadius: 15, marginRight: 10}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.item_label}>Repeat</Text>
                            <TouchableOpacity onPress={this._showAreaPicker.bind(this)}>
                                <Text style={styles.item_text}>{this.state.Repeat}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }

    _createDateData() {
        let date = [];
        for (let i = 1950; i < 2050; i++) {
            let month = [];
            for (let j = 1; j < 13; j++) {
                let day = [];
                if (j === 2) {
                    for (let k = 1; k < 29; k++) {
                        day.push(k + '日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if (i % 4 === 0) {
                        day.push(29 + '日');
                    }
                }
                else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {
                    for (let k = 1; k < 32; k++) {
                        day.push(k + '日');
                    }
                }
                else {
                    for (let k = 1; k < 31; k++) {
                        day.push(k + '日');
                    }
                }
                let _month = {};
                _month[j + '月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i + '年'] = month;
            date.push(_date);
        }
        return date;
    }

    _showDatePicker() {
        let that = this;
        let Date=this.state.date;
        Picker.init({
            pickerData: this._createDateData(),
            pickerToolBarFontSize: 16,
            selectedValue:Date,
            pickerTitleText: 'date picker',
            pickerFontSize: 16,
            pickerFontColor: [255, 0, 0, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                that.setState({
                    date: pickedValue
                });
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    _createAreaData() {
        let data = [];
        let len = area.length;
        for (let i = 0; i < len; i++) {
            let city = [];
            for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    _showAreaPicker() {
        let that = this;
        Picker.init({
            pickerData: this._createAreaData(),
            selectedValue: this.state.Location,
            pickerTitleText: 'area picker',
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
                that.setState({
                    Location: pickedValue
                });
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }

    _showTimePicker() {
        let years = [],
            months = [],
            days = [],
            hours = [],
            minutes = [];

        for (let i = 1; i < 51; i++) {
            years.push(i + 1980);
        }
        for (let i = 1; i < 13; i++) {
            months.push(i);
            hours.push(i);
        }
        for (let i = 1; i < 32; i++) {
            days.push(i);
        }
        for (let i = 1; i < 61; i++) {
            minutes.push(i);
        }
        let pickerData = [years, months, days, ['am', 'pm'], hours, minutes];
        let date = new Date();
        let selectedValue = [
            [date.getFullYear()],
            [date.getMonth() + 1],
            [date.getDate()],
            [date.getHours() > 11 ? 'pm' : 'am'],
            [date.getHours() === 12 ? 12 : date.getHours() % 12],
            [date.getMinutes()]
        ];
        Picker.init({
            pickerData,
            selectedValue,
            pickerTitleText: 'Select Date and Time',
            wheelFlex: [2, 1, 1, 2, 1, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                let targetValue = [...pickedValue];
                if (parseInt(targetValue[1]) === 2) {
                    if (targetValue[0] % 4 === 0 && targetValue[2] > 29) {
                        targetValue[2] = 29;
                    }
                    else if (targetValue[0] % 4 !== 0 && targetValue[2] > 28) {
                        targetValue[2] = 28;
                    }
                }
                else if (targetValue[1] in {4: 1, 6: 1, 9: 1, 11: 1} && targetValue[2] > 30) {
                    targetValue[2] = 30;

                }
                // forbidden some value such as some 2.29, 4.31, 6.31...
                if (JSON.stringify(targetValue) !== JSON.stringify(pickedValue)) {
                    // android will return String all the time，but we put Number into picker at first
                    // so we need to convert them to Number again
                    targetValue.map((v, k) => {
                        if (k !== 3) {
                            targetValue[k] = parseInt(v);
                        }
                    });
                    Picker.select(targetValue);
                    pickedValue = targetValue;
                }
            }
        });
        Picker.show();
    }

    _toggle() {
        Picker.toggle();
    }

    _isPickerShow() {
        Picker.isPickerShow(status => {
            alert(status);
        });
    }
}
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应
        //祛除内部元素的白色背景
        backgroundColor: 'rgba(0,0,0,0)',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar_con: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingHorizontal: 0,
        paddingBottom: 0,
    },
    menu: {
        paddingTop: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    iconMenu: {
        width: 18,
        height: 18,
    },
    search: {
        width: 22,
        height: 22,
    },
    add: {
        position: 'absolute',
        top: 172,
        right: 15,
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 11111,
        backgroundColor: '#ff3366',
        borderRadius: 55,
    },
    icon_add: {
        width: 22,
        height: 22
    },
    item: {
        flexDirection: 'row',
        alignItems: "center",
        height: 64,
        paddingHorizontal: 26,
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#1d1d26',
        marginBottom: 2,
    },
    item_label: {
        fontSize: 14,
        flex: 1,
        color: " rgba(29, 29, 38, 0.5)"
    },
    item_text: {
        fontSize: 16,
        color: '#1d1d26',
    },
    datePicker: {
        marginLeft: 20,
        width: 22,
        height: 22
    }
});