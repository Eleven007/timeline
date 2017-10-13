/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
let Service = {
    host: 'http://192.168.0.172:3333',
    login:'/user/login',
    loginByToken:'/user/login/token',
    getUser:'/user/get',
    addUser:'/user/create',
    updatePassword:'/user/password/update',
    deleteUser:'/user/delete',
    getMessage:'/message/get',
    addMessage:'/message/add',
    //天气预报API
    weatherURL:'http://www.sojson.com/open/api/weather/json.shtml'
};
module.exports=Service;