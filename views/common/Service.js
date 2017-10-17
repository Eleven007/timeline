/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/28
 * 历史修订：
 */
let Service = {
    host: 'http://192.168.0.172:3333',
    userUri: {
        login: '/user/login',
        loginByToken: '/user/login/token',
        getUser: '/user/get',
        addUser: '/user/create',
        updatePassword: '/user/password/update',
        deleteUser: '/user/delete',
        getMessage: '/message/get',
        addMessage: '/message/add',
    },
    noteUri:{
        getNote: '/note/get',
        addNote: '/note/create',
        updateNote: '/note/update',
        deleteNote: '/note/delete',
    },
    //天气预报API
    weatherURL: 'http://jisutqybmf.market.alicloudapi.com/weather/query',
    weatherAppCode: '7105eecd75404cb5b4bfab8829cc0d15'
};
module.exports = Service;