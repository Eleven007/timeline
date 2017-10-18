/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/8/10
 * 历史修订：
 */
let User = require('../models/relation').Users;
const Sequelize = require('sequelize');
const co = require('co');
const util = require('../routes/util');
let userControllers = {
    init: function (app) {
        app.post('/user/get', this.getUser);
        app.post('/user/create', this.addUser);
        app.post('/user/login', this.login);
        app.post('/user/login/token', this.loginByToken);
        app.post('/user/update', this.updateUser);
        app.post('/user/delete', this.deleteUser);
    },
    //获取用户信息
    getUser: function (req, res) {
        // let key = req.body.key;
        // let partment = req.body.partment;
        // if (key !== util.getKey()) {
        //     return res.send({
        //         status: 0,
        //         data: '使用了没有鉴权的key'
        //     })
        // }
        // fs.readFile(USER_PATH, function (err, data) {
        //     if (!err) {
        //         try {
        //             let obj = JSON.parse(data);
        //             let newObj = [];
        //             for (let i in obj) {
        //                 if (obj[i].partment === partment) {
        //                     delete obj[i]['password'];
        //                     newObj.push(obj[i]);
        //                 }
        //             }
        //             return res.send({
        //                 status: 0,
        //                 data: newObj
        //             })
        //         } catch (e) {
        //             return res.send({
        //                 status: 0,
        //                 err: e
        //             })
        //         }
        //     }
        // })
    },
    //新增用户
    addUser: function (req, res) {
        let username = req.body.username;
        let password = util.md5(req.body.password);
        let birthday = req.body.birthday;
        let email = req.body.email;
        let nickName=req.body.nickName;
        let avator=req.body.avator;
        let phone=req.body.phone;
        let address=req.body.address;
        let status=req.body.status||0;
        let deviceId=req.body.deviceId;
        let ip=req.body.ip;
        if (!username || !password || !birthday || !email) {
            return res.send({
                status: 400,
                msg: '缺少必要的参数'
            })
        }
        try {
            let userobj = {
                'name': username,
                'password': password,
                'birthday': birthday,
                'email': email,
                'nickName':nickName,
                'phone':phone,
                'address':address,
                'avator':avator,
                'status':status,
                'deviceId':deviceId,
                'ip':ip,
                'token': ''
            };
            co(function*() {
                let userObj = yield User.findOne({
                    where: {
                        name: username,
                    }
                });
                if (userObj) {
                    return res.send({
                        status: 400,
                        msg: '此用户名已注册'
                    })
                } else {
                    User.create(userobj).then(function () {
                        return res.send({
                            status: 200,
                            msg: '注册成功'
                        })
                    })
                }
            })
        } catch (e) {
            return res.send({
                status: 400,
                msg: e
            })
        }
    },
    //用户登录
    login: function (req, res) {
        let username = req.body.username;
        let password = util.md5(req.body.password);
        let deviceId = req.body.deviceId || "12345";
        let token = util.guid() + "@" + deviceId;
        if (!username || !password) {
            return res.send({
                status: 400,
                msg: '用户名或密码不能为空'
            })
        } else {
            try {
                User.findOne({
                    where: {
                        name: username,
                        password: password
                    }
                }).then(function (data) {
                    if (data) {
                        User.update({'token': token}, {
                            where: {
                                name: username,
                                password: password
                            }
                        }).then(function () {
                            res.json({
                                status: 200,
                                data: data
                            });
                        })
                    } else {
                        res.json({
                            status: 400,
                            msg: '用户名或密码错误'
                        });
                    }
                })
            } catch (e) {
                res.json({
                    status: 400,
                    msg: '登录失败！'
                });
            }
        }
    },
    loginByToken: function (req, res) {
        // let token = req.body.token;
        // let content = JSON.parse(fs.readFileSync(USER_PATH));
        // for (let i in content) {
        //     if (token === content[i].token) {
        //         delete content[i].password;
        //         return res.send({
        //             status: 1,
        //             data: content[i]
        //         })
        //     }
        // }
        // return res.send({
        //     status: 0,
        //     info: 'token失效'
        // })
    },
    updateUser: function (req, res) {
        let userId=req.body.id;
        if (!userId) {
            return res.send({
                status: 400,
                msg: '缺少必要的参数'
            })
        }
        try {
            let userObj=req.body;
            delete userObj.id;
            userObj.password=util.md5(req.body.password);
            User.update(userObj,{
                where:{
                    id:userId
                }
            }).then(function (result) {
                return res.send({
                    status: 200,
                    msg: '修改成功！'
                })
            })
        }catch (e){
            return res.send({
                status: 400,
                msg: e
            })
        }
    },
    deleteUser: function (req, res) {
        // let token = req.body.token;
        // let email =req.body.email;
        // let content = JSON.parse(fs.readFileSync(USER_PATH));
        // for(let i in content){
        //     if(token===content[i].token){
        //         for(let j in content){
        //             if(content[j].email===email){
        //                 content.splice(j,1);
        //                 fs.writeFileSync(USER_PATH,JSON.stringify(content));
        //                 return res.send({
        //                     status:1,
        //                     info:content,
        //                     data:'删除成功'
        //                 })
        //             }
        //         }
        //     }
        // }
        // return res.send({
        //     status:0,
        //     data:'删除失败！没有找到该用户或者用户鉴权失败'
        // })
    }
};
module.exports = userControllers;