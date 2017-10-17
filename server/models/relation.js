/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/8/10
 * 历史修订：
 */
const db=require('../db').sequelize();
let users = db.import('./Users');
let notes = db.import('./Notes');
// 同步模型到数据库中
users.belongsToMany(notes,{through: 'user2Note',as:'User2Note'});
notes.belongsToMany(users, {through: 'user2Note',as:'User2Note'});
db.sync().then(function (result) {

});
exports.Users = users;
exports.Notes = notes;