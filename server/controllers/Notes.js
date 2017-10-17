/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/10/17
 * 历史修订：
 */
let Note = require('../models/relation').Notes;
let User = require('../models/relation').Users;
const Sequelize = require('sequelize');
const co = require('co');
const util = require('../routes/util');

let noteControllers = {
    init: function (app) {
        app.get('/note/get', this.getNote);
        app.post('/note/create', this.addNote);
        app.post('/note/update', this.updateNote);
        app.post('/note/delete', this.deleteNote);
    },
    //获取笔记信息
    getNote: function (req, res) {
        let userId = req.query.userId;
        if (!userId) {
            return res.send({
                status: 400,
                msg: '缺少必要的参数'
            })
        } else {
            try {
                Note.findAll({
                    where: {
                        uid: userId,
                    },
                    include:[{
                        model: User,as: 'User2Note',
                        attributes:['name','avator','nickName']
                    }]
                }).then(function (data) {
                    res.json({
                        status: 200,
                        data: data
                    });
                })
            } catch (e) {
                return res.send({
                    status: 400,
                    msg: e
                })
            }
        }
    },
    //新增笔记
    addNote: function (req, res) {
        let userId = req.body.userId;
        let noteObj = {
            uid: userId,
            title: req.body.title,
            desc: req.body.desc,
            location: req.body.location,
            notification: req.body.notification,
            repeat: req.body.repeat,
            date: req.body.date,
            beginTime: req.body.beginTime,
            endTime: req.body.endTime,
            timestatus: req.body.timestatus
        };
        try {
            co(function*() {
                let results = yield [
                    User.findAll({
                        where: {
                            id: {
                                $in: [1, 2],
                            }
                        }
                    }),
                    Note.create(noteObj),
                ];
                let note=results[1];
                let user=results[0];
                yield note.setUser2Note(user);
                res.set('Content-Type', 'text/html; charset=utf-8');
                res.end('userRoles 插入数据成功');
            });
        } catch (e) {
            return res.send({
                status: 400,
                msg: e
            })
        }
    },
    updateNote: function (req, res) {
    },
    deleteNote: function (req, res) {
    }
};
module.exports = noteControllers;