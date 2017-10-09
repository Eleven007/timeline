/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/8/10
 * 历史修订：
 */
const db=require('../db').sequelize();
let users = require('./Users');
// 同步模型到数据库中
db.sync();
exports.Users = users;